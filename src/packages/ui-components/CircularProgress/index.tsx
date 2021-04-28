import * as React from 'react';

import CircularProgressMUI from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import WrapperTheme from '../ThemeProvider/WrapperTheme';
import ProgressIndicator from './ProgressIndicator';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative',
      display: 'inline-flex'
    },
    circularProgressBackground: {
      opacity: 0.2
    },
    circularProgress: {
      '& svg': {
        color: theme.palette.success.main
      }
    },
    progress: {
      position: 'absolute'
    },
    progressError: {
      '& svg': {
        color: theme.palette.error.main
      }
    }
  })
);

interface ICircularProgressProps {
  maxSteps: number;
  currentStep?: number;
  type?: 'numeric' | 'percentage';
  error?: boolean;
}

const CircularProgress = React.memo<ICircularProgressProps>(({ currentStep, maxSteps, type, error }) => {
  const classes = useStyles();
  const progress = type === 'percentage' ? `${(currentStep / maxSteps) * 100}%` : `${currentStep}/${maxSteps}`;

  return (
    <WrapperTheme>
      <div className={classes.root}>
        <CircularProgressMUI
          variant='determinate'
          size={90}
          value={100}
          className={clsx(classes.circularProgress, classes.circularProgressBackground, error && classes.progressError)}
          color='primary'
        />
        <CircularProgressMUI
          variant='determinate'
          size={90}
          value={30}
          className={clsx(classes.circularProgress, classes.progress, error && classes.progressError)}
        />
        <ProgressIndicator progress={progress} />
      </div>
    </WrapperTheme>
  );
});

export default CircularProgress;
