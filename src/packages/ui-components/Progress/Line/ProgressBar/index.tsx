import * as React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

interface IProgressBarProps {
  progress: number;
}

const Bar = withStyles(theme => ({
  root: {
    height: 8
  },
  colorPrimary: {
    backgroundColor: theme.houston.colors.grey[200]
  },
  bar: {
    height: 80,
    backgroundColor: theme.houston.colors.success.main
  }
}))(LinearProgress);

const ProgressBar = ({ progress }: IProgressBarProps) => {
  return <Bar variant='determinate' value={progress > 100 ? 100 : progress} />;
};

export default ProgressBar;
