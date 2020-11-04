import React, { ComponentType, forwardRef, memo, MemoExoticComponent, useCallback } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AlertGlobalProvider, { showGlobalAlert } from './global';

interface IProps {
  opened: boolean;
  message: React.ReactNode;
  title?: string;
  confirmation?: boolean;
  global?: boolean;
  onClose: (ok: boolean) => void;
}

export interface IAlertShowParams {
  message: React.ReactNode;
  title?: string;
  confirmation?: boolean;
}

type AlertComponent = MemoExoticComponent<ComponentType<IProps>> & {
  Global?: typeof AlertGlobalProvider;

  show?(params: string): Promise<boolean>;
  show?(params: IAlertShowParams): Promise<boolean>;

  confirm?(params: string): Promise<boolean>;
  confirm?(params: IAlertShowParams): Promise<boolean>;
};

const useStyle = makeStyles({
  root: {
    zIndex: 1600
  },
  content: {
    minWidth: '250px'
  }
});

const Alert: AlertComponent = memo((props: IProps) => {
  const classes = useStyle(props);

  const handleOk = useCallback(() => props.onClose(true), [props]);
  const handleCancel = useCallback(() => props.onClose(false), [props]);

  return (
    <Dialog
      open={props.opened}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleCancel}
      className={classes.root}
    >
      <DialogTitle>{props.title || (props.confirmation ? 'Confirmação' : 'Atenção')}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.content}>{props.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {props.confirmation && (
          <Button onClick={handleCancel} autoFocus>
            Cancelar
          </Button>
        )}
        <Button autoFocus={!props.confirmation} onClick={handleOk} color='primary'>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
});

Alert.Global = AlertGlobalProvider;

Alert.show = (params: string | IAlertShowParams) => {
  const paramsData = typeof params === 'string' ? { message: params } : params;
  return showGlobalAlert(paramsData);
};

Alert.confirm = (params: string | IAlertShowParams) => {
  const paramsData = typeof params === 'string' ? { message: params } : params;
  return showGlobalAlert({ ...paramsData, confirmation: true });
};

const Transition = memo(
  forwardRef((props: any, ref: any) => {
    return <Slide direction='up' {...props} ref={ref} />;
  })
);

export default Alert;
