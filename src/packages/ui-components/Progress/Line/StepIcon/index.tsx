import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import Warning from '@material-ui/icons/Warning';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: 40,
    height: 40,
    color: theme.palette.grey[300],
    backgroundColor: theme.palette.grey[200],
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    pointerEvents: 'none',
    fontWeight: 600
  },
  finished: {
    backgroundColor: theme.palette.success.main,
    fontWeight: 600,
    color: '#fff'
  },
  check: {
    fontSize: 16
  },
  warning: {
    color: theme.palette.error.main,
    fontSize: 24
  }
}));

interface IStepIconProps {
  icon: React.ReactNode;
  active: boolean;
  completed: boolean;
  error: boolean;
}

const StepIcon = ({ icon, active, completed, error }: IStepIconProps) => {
  const classes = useStyles();

  return (
    <>
      {error && <Warning className={classes.warning} />}
      {!error && (
        <div
          className={clsx(classes.root, {
            [classes.finished]: active || completed
          })}
        >
          {completed && <Check className={classes.check} />}
          {!completed && icon}
        </div>
      )}
    </>
  );
};

export default StepIcon;
