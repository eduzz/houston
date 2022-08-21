import { Controller, useFormContext } from 'react-hook-form';

import { DragAndDropProps } from './types';
import { removeFileItem } from './utils';

const withForm =
  (Component: React.ComponentType<DragAndDropProps>) =>
  ({ onChange, onRemove, ...props }: DragAndDropProps) => {
    const form = useFormContext();

    if (!form || !props.name) {
      return <Component onChange={onChange} onRemove={onRemove} {...props} />;
    }

    return (
      <Controller
        control={form.control}
        name={props.name}
        render={({ field, formState }) => (
          <Component
            {...props}
            {...field}
            defaultFileList={field.value}
            onChange={info => {
              onChange && onChange(info);
              const fileErrors = info.fileList.filter(file => file.status === 'error' && file.errorMessage);
              if (!!fileErrors.length) {
                form.setError(field.name, {
                  type: 'custom',
                  message: fileErrors[0].errorMessage
                });
                return;
              }
              const isEveryFileSuccess = info.fileList.every(file => file.status === 'success');
              if (!isEveryFileSuccess) return;
              field.onChange(info.fileList);
            }}
            onRemove={file => {
              const updatedFileList = removeFileItem(file, field.value);
              const isEveryFileSuccess = updatedFileList?.every(file => file.status === 'success');
              if (!isEveryFileSuccess) return;
              field.onChange(updatedFileList);
              onRemove && onRemove(file);
            }}
            disabled={props.disabled || formState?.isSubmitting}
          />
        )}
      />
    );
  };

export default withForm;
