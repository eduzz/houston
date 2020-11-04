import React, { forwardRef, Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Cropper } from 'react-image-cropper';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import transparency from 'assets/images/transparency.png';
import imageCompress from 'helpers/imagerCompress';

import { calculateRegion } from './helpers';
import ImageReader, { IImageReaderResult } from './ImageReader';

export interface IImageSelectorResult {
  filename: string;
  base64: string;
}

interface IProps {
  opened: boolean;
  width: number;
  height: number;
  onComplete: (result: IImageSelectorResult) => void;
}

const useStyle = makeStyles({
  imageContainer: {
    background: `url('${transparency}') repeat`,
    boxShadow: '5px 5px 10px #00000040',
    margin: 'auto'
  },
  content: {
    overflow: 'auto',
    width: 'calc(100vw - 110px)',
    maxHeight: 'calc(100vh - 140px) !important'
  }
});

const ImageSelector = memo((props: IProps) => {
  const classes = useStyle(props);
  const cropper = useRef<any>();

  const [resizeTimeout, setResizeTimeout] = useState<any>();
  const [image, setImage] = useState<IImageReaderResult>();
  const [saving, setSaving] = useState(false);
  const [dimentions, setDimentions] = useState<{ width: number; height: number }>();

  const reCalculateRegion = useCallback(() => {
    clearTimeout(resizeTimeout);
    setResizeTimeout(
      setTimeout(() => {
        if (!image) return;

        const newDimentions = calculateRegion(image.width, image.height);

        if (dimentions && newDimentions.width === dimentions.width && newDimentions.height === dimentions.height) {
          return;
        }

        setImage(null);
        setTimeout(() => {
          setImage(image);
          setDimentions(newDimentions);
        }, 0);
      }, 500)
    );
  }, [dimentions, image, resizeTimeout]);

  useEffect(() => {
    window.addEventListener('resize', reCalculateRegion);
    return () => window.removeEventListener('resize', reCalculateRegion);
  }, [reCalculateRegion]);

  const onExited = useCallback(() => setImage(null), []);

  const handleSave = useCallback(async () => {
    setSaving(true);

    const result = await imageCompress(cropper.current.crop(), props.width, props.height);
    props.onComplete({
      filename: 'image.png',
      base64: result
    });

    setSaving(false);
  }, [props]);

  const handleCancel = useCallback(() => props.onComplete(null), [props]);

  const handleSetImage = useCallback((image: IImageReaderResult) => {
    setImage(null);

    setTimeout(() => {
      const dimentions = calculateRegion(image.width, image.height);
      setImage(image);
      setDimentions(dimentions);
    }, 0);
  }, []);

  return (
    <Fragment>
      <Dialog
        open={props.opened || false}
        maxWidth={false}
        disableBackdropClick
        disableEscapeKeyDown
        onExited={onExited}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <Grid container spacing={3} alignContent='center'>
            <Grid item xs={true}>
              Selecionar Imagem
              <Typography variant='body1'>
                <strong>Tamanho sugerido:</strong> {props.height}px de altura {props.width}px de largura
              </Typography>
            </Grid>
            {image && (
              <Grid item xs={false}>
                <ImageReader onLoad={handleSetImage} />
              </Grid>
            )}
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.content}>
          {!image && <ImageReader onLoad={handleSetImage} droppable />}

          {image && (
            <div className={classes.imageContainer} style={dimentions}>
              <Cropper
                src={image.url}
                ratio={props.width / props.height}
                width={props.width}
                height={props.height}
                allowNewSelection={false}
                ref={cropper}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button disabled={saving} onClick={handleCancel}>
            Cancelar
          </Button>
          <Button disabled={!image || saving} color='primary' onClick={handleSave}>
            {saving ? <CircularProgress size={20} /> : 'OK'}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

const Transition = memo(
  forwardRef((props: any, ref: any) => {
    return <Slide direction='up' {...props} ref={ref} />;
  })
);

export default ImageSelector;
