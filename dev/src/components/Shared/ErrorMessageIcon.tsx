import React, { memo, useCallback } from 'react';

import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Alert from 'components/Shared/Alert';
import { errorMessageFormatter } from 'formatters/errorMessage';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';

interface IProps {
  error: any;
  onDismiss?: Function;
}

const useStyle = makeStyles(theme => ({
  icon: {
    opacity: 0.8,
    color: theme.palette.error.main
  }
}));

const ErrorMessageIcon = memo((props: IProps) => {
  const classes = useStyle(props);

  const showAlert = useCallback(async () => {
    await Alert.show(errorMessageFormatter(props.error));
    props.onDismiss && props.onDismiss();
  }, [props]);

  return (
    <IconButton onClick={showAlert}>
      <AlertCircleIcon className={classes.icon} />
    </IconButton>
  );
});

export default ErrorMessageIcon;
