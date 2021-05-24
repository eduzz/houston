import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import Warning from '@material-ui/icons/Warning';

import clsx from 'clsx';

import defaultThemeVariables from '../../../styles/ThemeProvider/_default/variables';

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
    pointerEvents: 'none',
    fontSize: defaultThemeVariables.textSize('default'),
    fontWeight: defaultThemeVariables.fontWeight('semibold')
  },
  finished: {
    backgroundColor: theme.palette.success.main,
    fontWeight: defaultThemeVariables.fontWeight('semibold'),
    color: '#fff'
  },
  check: {
    fontSize: defaultThemeVariables.textSize('default')
  },
  warning: {
    color: theme.palette.error.main
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
