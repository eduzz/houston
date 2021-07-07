import * as React from 'react';

import CircularProgressMUI from '@material-ui/core/CircularProgress';

import clsx from 'clsx';

import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import Typography from '../../Typography';

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
      color: theme.colors.success.main
    }
  },
  progress: {
    position: 'absolute'
  },
  progressError: {
    '& svg': {
      color: theme.colors.error.main
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
      color: theme.colors.grey[500]
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
        className={clsx(classes.circularProgress, classes.circularProgressBackground, error && classes.progressError)}
        color='primary'
      />
      <CircularProgressMUI
        variant='determinate'
        size={90}
        value={value}
        className={clsx(classes.circularProgress, classes.progress, error && classes.progressError)}
      />
      <div className={classes.progressIndicator}>
        <Typography size='default'>{progress}</Typography>
      </div>
    </div>
  );
};

export default withHoustonTheme(ProgressRound);
