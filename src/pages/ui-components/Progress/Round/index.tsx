import * as React from 'react';

import CircularProgressMUI from '@mui/material/CircularProgress';

import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import Typography from '../../Texts/Typography';

const useStyles = createUseStyles(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex'
  },
  circularProgressBackground: {
    opacity: 0.2
  },
  circularProgress: {
    '& svg': {
      color: theme.feedbackColor.positive.pure
    }
  },
  progress: {
    position: 'absolute'
  },
  progressError: {
    '& svg': {
      color: theme.feedbackColor.negative.pure
    }
  },
  progressIndicator: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    '& p': {
      color: theme.neutralColor.high.dark
    }
  }
}));

interface ICircularProgressProps {
  maxSteps: number;
  currentStep?: number;
  type?: 'numeric' | 'percentage';
  error?: boolean;
}

const ProgressRound: React.FC<ICircularProgressProps> = ({ currentStep = 0, maxSteps, type, error }) => {
  const classes = useStyles();
  const value = (currentStep / maxSteps) * 100;
  const progress = type === 'percentage' ? `${value}%` : `${currentStep}/${maxSteps}`;

  return (
    <div className={classes.root}>
      <CircularProgressMUI
        variant='determinate'
        size={90}
        value={100}
        className={cx(classes.circularProgress, classes.circularProgressBackground, error && classes.progressError)}
        color='primary'
      />
      <CircularProgressMUI
        variant='determinate'
        size={90}
        value={value}
        className={cx(classes.circularProgress, classes.progress, error && classes.progressError)}
      />
      <div className={classes.progressIndicator}>
        <Typography size='xs'>{progress}</Typography>
      </div>
    </div>
  );
};

export default ProgressRound;
