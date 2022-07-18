import * as React from 'react';

import Check from '@mui/icons-material/Check';
import Warning from '@mui/icons-material/Warning';

import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  root: {
    width: 40,
    height: 40,
    color: theme.neutralColor.high.medium,
    backgroundColor: theme.neutralColor.high.light,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: theme.font.size.xs,
    fontWeight: theme.font.weight.semibold
  },
  finished: {
    backgroundColor: theme.feedbackColor.positive.pure,
    fontWeight: theme.font.weight.semibold,
    color: '#fff'
  },
  check: {
    fontSize: theme.font.size.xs
  },
  warning: {
    color: theme.feedbackColor.negative.pure
  }
}));

interface StepIconProps {
  icon: React.ReactNode;
  active: boolean;
  completed: boolean;
  error: boolean;
}

const StepIcon = ({ icon, active, completed, error }: StepIconProps) => {
  const classes = useStyles();

  return (
    <>
      {error && <Warning className={classes.warning} />}
      {!error && (
        <div
          className={cx(classes.root, {
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
