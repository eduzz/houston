import * as React from 'react';

import RcUpload from 'rc-upload';
import type { UploadProps as RcUploadProps } from 'rc-upload';
import type { RcFile, UploadProgressEvent } from 'rc-upload/lib/interface';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { flushSync } from 'react-dom';
import * as yup from 'yup';

import UploadIcon from '@eduzz/houston-icons/Upload';
import styled, { css, cx } from '@eduzz/houston-styles';

import Link from '../../../Link';
import nestedComponent from '../../../utils/nestedComponent';
import withForm from './FormWrapper';
import { DragAndDropProps, UploadChangeParam, UploadFile } from './types';
import UploadList from './UploadList';
import { file2Obj, getFileItem, removeFileItem, updateFileList } from './utils';

export const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;

const DragAndDrop = React.forwardRef<unknown, DragAndDropProps>(
  (
    {
      className,
      label,
      helperText,
      onChange,
      onDrop,
      onRemove,
      disabled,
      fullWidth = true,
      fileList,
      defaultFileList,
      fileValidationSchema,
      beforeUpload,
      ...props
    }: DragAndDropProps,
    ref
  ) => {
    const uploadRef = React.useRef<any>(null);
    const [mergedFileList, setMergedFileList] = useMergedState(defaultFileList || [], {
      value: fileList,
      postState: list => list ?? []
    });

    // Control mode will auto fill file uid if not provided
    React.useMemo(() => {
      const timestamp = Date.now();

      (fileList || []).forEach((file, index) => {
        if (!file.uid && !Object.isFrozen(file)) {
          file.uid = `__AUTO__${timestamp}_${index}__`;
        }
      });
    }, [fileList]);

    // Test needs
    React.useImperativeHandle(ref, () => ({
      onBatchStart,
      onSuccess,
      onProgress,
      onError,
      fileList: mergedFileList,
      upload: uploadRef.current
    }));

    const onInternalChange = (file: UploadFile, changedFileList: UploadFile[], event?: UploadProgressEvent) => {
      const cloneList = [...changedFileList];

      // Prevent React18 auto batch since input[upload] trigger process at same time
      // which makes fileList closure problem
      flushSync(() => {
        setMergedFileList(cloneList);
      });

      const changeInfo: UploadChangeParam<UploadFile> = {
        file: file as UploadFile,
        fileList: cloneList
      };

      if (event) {
        changeInfo.event = event;
      }

      onChange && onChange(changeInfo);
    };

    const validateFile = async (file: UploadFile) => {
      try {
        if (typeof fileValidationSchema === 'function') {
          await fileValidationSchema(yup).validate(file, { abortEarly: true });
          return true;
        }
        await fileValidationSchema?.validate(file, { abortEarly: true });
        return true;
      } catch (err: any) {
        return err.message;
      }
    };

    const onBatchStart: RcUploadProps['onBatchStart'] = async batchFileInfoList => {
      // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
      const filteredFileInfoList = batchFileInfoList.filter(info => !(info.file as any)[LIST_IGNORE]);

      // Nothing to do since no file need upload
      if (!filteredFileInfoList.length) return;

      const objectFileList = filteredFileInfoList.map(info => file2Obj(info.file as RcFile));

      // Concat new files with prev files
      let newFileList = [...mergedFileList];

      await new Promise(resolve =>
        objectFileList.forEach(async (fileObj, fileIndex, fileList) => {
          const isLastItem = fileIndex === fileList.length - 1;
          const error = fileValidationSchema ? await validateFile(fileObj) : false;
          // Replace file if exist
          const hasError = typeof error === 'string';
          if (hasError) {
            const invalidatedFile: UploadFile = { ...fileObj, status: 'error', errorMessage: error };
            newFileList = updateFileList(invalidatedFile, newFileList);
            uploadRef.current?.abort(fileObj);
            isLastItem && resolve(true);
            return;
          }
          newFileList = updateFileList(fileObj, newFileList);
          isLastItem && resolve(true);
        })
      );

      objectFileList.forEach((fileObj, index) => {
        // Repeat trigger `onChange` event for compatible
        let triggerFileObj: UploadFile = fileObj;

        // `beforeUpload` return false
        if (!filteredFileInfoList[index].parsedFile) {
          const { originFileObj } = fileObj;
          let clone;

          try {
            clone = new File([originFileObj], originFileObj.name, {
              type: originFileObj.type
            }) as UploadFile;
          } catch (e) {
            clone = new Blob([originFileObj], {
              type: originFileObj.type
            }) as any as UploadFile;
            clone.name = originFileObj.name;
            clone.lastModified = new Date().getTime();
          }

          clone.uid = fileObj.uid;
          triggerFileObj = clone;
        } else {
          // Inject `uploading` status
          fileObj.status = 'uploading';
        }

        onInternalChange(triggerFileObj, newFileList);
      });
    };

    const onSuccess = (response: Record<string, unknown>, file: RcFile, xhr: XMLHttpRequest) => {
      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {
        /* do nothing */
      }

      // removed
      if (!getFileItem(file, mergedFileList)) return;

      const targetItem = file2Obj(file);
      targetItem.status = 'success';
      targetItem.percent = 100;
      targetItem.response = response;
      targetItem.xhr = xhr;

      const nextFileList = updateFileList(targetItem, mergedFileList);

      onInternalChange(targetItem, nextFileList);
    };

    const onProgress = (e: UploadProgressEvent, file: RcFile) => {
      // removed
      if (!getFileItem(file, mergedFileList)) return;

      const targetItem = file2Obj(file);
      targetItem.status = 'uploading';
      targetItem.percent = e.percent;

      const nextFileList = updateFileList(targetItem, mergedFileList);

      onInternalChange(targetItem, nextFileList, e);
    };

    const onError = (error: Error, response: Record<string, unknown>, file: RcFile) => {
      // removed
      if (!getFileItem(file, mergedFileList)) return;

      const targetItem = file2Obj(file);
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';

      const nextFileList = updateFileList(targetItem, mergedFileList);

      onInternalChange(targetItem, nextFileList);
    };

    const handleRemove = (file: UploadFile) => {
      let currentFile: UploadFile;
      Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(ret => {
        // Prevent removing file
        if (ret === false) {
          return;
        }

        const removedFileList = removeFileItem(file, mergedFileList);

        if (removedFileList) {
          currentFile = { ...file, status: 'removed' };
          mergedFileList?.forEach(item => {
            const matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
            if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
              item.status = 'removed';
            }
          });
          uploadRef.current?.abort(currentFile);

          onInternalChange(currentFile, removedFileList);
        }
      });
    };

    const onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
      if (e.type === 'drop' && onDrop) {
        onDrop(e);
      }
    };

    const mergedBeforeUpload = async (file: RcFile, fileListArgs: RcFile[]) => {
      let parsedFile: File | Blob | string = file;

      if (beforeUpload) {
        const result = await beforeUpload(file, fileListArgs);

        if (result === false) return false;

        // Hack for LIST_IGNORE, we add additional info to remove from the list
        delete file[LIST_IGNORE];
        if (result === LIST_IGNORE) {
          Object.defineProperty(file, LIST_IGNORE, {
            value: true,
            configurable: true
          });
          return false;
        }

        if (typeof result === 'object' && result) {
          parsedFile = result as File;
        }
      }

      return parsedFile as RcFile;
    };

    return (
      <div
        className={cx(className, {
          'hst-drag-and-drop-disabled': disabled,
          'hst-drag-and-drop-full-width': fullWidth
        })}
      >
        <span className='hst-drag-and-drop-label'>{label}</span>
        <RcUpload
          className='hst-drag-and-drop-drop-section'
          tabIndex={0}
          onBatchStart={onBatchStart}
          onError={onError}
          onProgress={onProgress}
          onSuccess={onSuccess}
          ref={uploadRef}
          onDragEnter={onFileDrop}
          onDragLeave={onFileDrop}
          onDrop={onFileDrop}
          type='drag'
          {...(props as RcUploadProps)}
          beforeUpload={mergedBeforeUpload}
          onChange={undefined}
        >
          <UploadIcon className='hst-drag-and-drop-drop-section-icon' size='lg' />
          <span className='hst-drag-and-drop-drop-section-description'>
            Arraste e solte aqui <br /> ou <br />
            <Link className='hst-drag-and-drop-drop-section-description-link'>Procurar arquivos</Link>
          </span>
        </RcUpload>
        {helperText && <span className='hst-drag-and-drop-helper-text'>{helperText}</span>}
        {!!mergedFileList.length && <UploadList items={mergedFileList} onRemove={handleRemove} />}
      </div>
    );
  }
);

const StyledDragAndDrop = styled(withForm(DragAndDrop), { label: 'hst-drag-and-drop' })`
  ${({ theme }) => css`
    display: inline-flex;
    flex-direction: column;
    min-width: ${theme.pxToRem(320)}rem;
    flex: 1;

    &.hst-drag-and-drop-full-width {
      width: 100%;
    }

    &.hst-drag-and-drop-disabled {
      opacity: ${theme.opacity.level[6]};
      cursor: not-allowed;
      user-select: none;

      .hst-drag-and-drop-drop-section,
      .hst-drag-and-drop-file-item-remove-button {
        pointer-events: none;
      }
    }

    .hst-drag-and-drop-label {
      color: ${theme.neutralColor.low.pure};
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      margin-bottom: ${theme.spacing.stack.quarck};
    }

    .hst-drag-and-drop-drop-section {
      min-height: ${theme.pxToRem(184)}rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: ${theme.spacing.inset.xs};
      border-radius: ${theme.border.radius.xs};
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23A3A3A3' stroke-width='1' stroke-dasharray='8%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      transition: background-color 500ms;

      &:hover {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }

      &:focus {
        outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
        background-image: none;
      }

      .hst-drag-and-drop-drop-section-description-link {
        pointer-events: none;
      }

      .hst-drag-and-drop-drop-section-description {
        margin-block: ${theme.spacing.stack.nano};
        color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[8])};
        font-family: ${theme.font.family.base};
        font-size: ${theme.font.size.xs};
        font-weight: ${theme.font.weight.semibold};
        line-height: ${theme.line.height.xl};
        text-align: center;
      }
    }

    .hst-drag-and-drop-helper-text {
      color: ${theme.neutralColor.low.pure};
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.size.xxs};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      margin-top: ${theme.spacing.stack.nano};
    }
  `}
`;

export default nestedComponent(StyledDragAndDrop, {
  LIST_IGNORE
});

export * from './types';
