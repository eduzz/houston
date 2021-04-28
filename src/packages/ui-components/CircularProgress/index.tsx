import * as React from 'react';

import CircularProgressMUI from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import WrapperTheme from '../ThemeProvider/WrapperTheme';
import ProgressIndicator from './ProgressIndicator';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
      display: 'inline-flex'
    },
    circularProgressBackground: {
      opacity: 0.3
    },
    circularProgress: {
      position: 'absolute'
    }
  })
);

interface IProps {
  maxSteps: number;
  currentStep?: number;
  type?: 'numeric' | 'percentage';
  error?: boolean;
}

const CircularProgress = React.memo<IProps>(({ currentStep, maxSteps, type }) => {
  const classes = useStyles();
  const progress = type === 'percentage' ? `${(currentStep / maxSteps) * 100}%` : `${currentStep}/${maxSteps}`;

  return (
    <WrapperTheme>
      <div className={classes.root}>
        <CircularProgressMUI
          variant='determinate'
          size={90}
          value={100}
          className={classes.circularProgressBackground}
        />
        <CircularProgressMUI variant='determinate' size={90} value={30} className={classes.circularProgress} />
        <ProgressIndicator progress={progress} />
      </div>
    </WrapperTheme>
  );
});

export default CircularProgress;
