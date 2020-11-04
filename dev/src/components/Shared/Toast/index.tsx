import React, { ComponentType, memo, MemoExoticComponent, useCallback, useMemo, useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { errorMessageFormatter } from 'formatters/errorMessage';
import CloseIcon from 'mdi-react/CloseIcon';
import { TOAST_DEFAULT_TIMEOUT, TOAST_ERROR_TIMEOUT } from 'settings';

import ToastGlobalProvider, { showGlobalToast } from './global';

interface IProps {
  opened: boolean;
  message?: string;
  timeout?: number;
  error?: Error;
  onClose: () => void;
}

type ToastComponent = MemoExoticComponent<ComponentType<IProps>> & {
  Global?: typeof ToastGlobalProvider;

  show?(message: string, timeout?: number): Promise<void>;
  error?(error: any): Promise<void>;
};

const useStyles = makeStyles(theme => ({
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      top: '24px',
      left: 'auto',
      right: '24px'
    }
  },
  contentError: {
    background: theme.palette.error.main
  },
  close: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

const Toast: ToastComponent = memo((props: IProps) => {
  const classes = useStyles(props);
  const [anchorOrigin] = useState<SnackbarOrigin>({ vertical: 'top', horizontal: 'right' });

  const [message, isError] = useMemo(() => {
    return props.message ? [props.message, false] : [errorMessageFormatter(props.error), true];
  }, [props.error, props.message]);

  const handleClose = useCallback(
    (event: any, reason?: string) => {
      if (reason === 'clickaway') return;
      props.onClose();
    },
    [props]
  );

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={props.opened}
      autoHideDuration={props.timeout}
      onClose={handleClose}
      message={<span>{message}</span>}
      className={classes.wrapper}
      ContentProps={{ className: isError ? classes.contentError : null }}
      action={[
        <IconButton key='close' color='inherit' className='close' onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
});

Toast.Global = ToastGlobalProvider;

Toast.show = (message: string, timeout?: number) => {
  return showGlobalToast(message, null, timeout || TOAST_DEFAULT_TIMEOUT);
};

Toast.error = (error: any) => {
  return showGlobalToast(null, error, TOAST_ERROR_TIMEOUT);
};

export default Toast;
