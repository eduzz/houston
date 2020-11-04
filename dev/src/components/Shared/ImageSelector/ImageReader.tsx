import React, { DragEvent, Fragment, memo, useCallback, useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

import IconMessage from 'components/Shared/IconMessage';
import FolderDownloadIcon from 'mdi-react/FolderDownloadIcon';
import FolderOpenIcon from 'mdi-react/FolderOpenIcon';

import Toast from '../Toast';
import { loadFile } from './helpers';

export interface IImageReaderResult {
  url: string;
  width: number;
  height: number;
}

interface IProps {
  droppable?: boolean;
  className?: string;
  onLoad: (result: IImageReaderResult) => void;
}

const useStyle = makeStyles({
  progress: {
    marginRight: 5
  },
  dropArea: {
    width: '100%',
    maxHeight: '100%',
    border: '2px dashed #00000029',
    borderRadius: '3px',
    textAlign: 'center',
    paddingBottom: 20,
    height: 180
  },
  dropAreaProgress: {
    marginTop: 60
  },
  dropAreaDragging: {
    background: '#fff10a1f'
  },
  dropAreaDraggingChildren: {
    pointerEvents: 'none'
  }
});

const ImageReader = memo((props: IProps) => {
  const classes = useStyle(props);
  const inputRef = useRef<HTMLInputElement>();
  const extensions = useRef(['png', 'gif', 'jpeg', 'jpg', 'bmp']).current;

  const [loading, setLoading] = useState(false);
  const [draggingOver, setDraggingOver] = useState(false);

  const handleSelectImage = useCallback(() => inputRef.current.click(), []);

  const handleLoadFile = useCallback(
    async (file: File) => {
      if (loading) return;

      try {
        setLoading(true);
        const result = await loadFile(file, extensions);
        setTimeout(() => props.onLoad(result), 1000);
      } catch (err) {
        Toast.show(
          err === 'invalid-extension' ? `Apenas imagens: ${extensions.join(', ')}` : 'Não conseguimos carregar a imagem'
        );
      }
    },
    [extensions, loading, props]
  );

  const onFileSelected = useCallback(() => {
    if (!inputRef.current.files.length) return;

    setLoading(true);

    handleLoadFile(inputRef.current.files[0]);
    inputRef.current.value = '';
  }, [handleLoadFile]);

  const onDropFile = useCallback(
    (event: DragEvent<any>) => {
      event.preventDefault();
      setDraggingOver(false);

      handleLoadFile(event.dataTransfer.files[0]);
    },
    [handleLoadFile]
  );

  const onDragInOut = useCallback((draggingOver: boolean, event: DragEvent<any>) => {
    event.preventDefault();
    setDraggingOver(draggingOver);
  }, []);

  const onDragIn = useCallback((event: DragEvent<any>) => onDragInOut(true, event), [onDragInOut]);
  const onDragOut = useCallback((event: DragEvent<any>) => onDragInOut(false, event), [onDragInOut]);

  const uploadButton = (
    <Fragment>
      <input
        type='file'
        ref={inputRef}
        className='hide'
        onChange={onFileSelected}
        accept={`.${extensions.join(',.')}`}
      />

      <Button color='primary' disabled={loading} onClick={handleSelectImage}>
        {loading ? <CircularProgress className={classes.progress} size={20} /> : <FolderOpenIcon />}
        &nbsp;{loading ? 'Carregando' : 'Selecionar'}
      </Button>
    </Fragment>
  );

  if (!props.droppable) {
    return uploadButton;
  }

  return (
    <div
      className={`${classes.dropArea} ${props.className || ''} ${draggingOver ? classes.dropAreaDragging : null}`}
      onDrop={onDropFile}
      onDragOver={onDragIn}
      onDragLeave={onDragOut}
    >
      {loading && <CircularProgress color='primary' size={50} className={classes.dropAreaProgress} />}

      {!loading && (
        <Fragment>
          <div className={classes.dropAreaDraggingChildren}>
            <IconMessage icon={FolderDownloadIcon} message='Arraste e solte a imagem aqui ou' />
          </div>

          <div className={draggingOver ? classes.dropAreaDraggingChildren : null}>{uploadButton}</div>
        </Fragment>
      )}
    </div>
  );
});

export default ImageReader;
