import LinearProgress from '@mui/material/LinearProgress';

import styled from '@eduzz/houston-styles/styled';

interface ProgressBarProps {
  progress: number;
}

const Bar = styled(LinearProgress)(({ theme }) => ({
  root: {
    height: 8
  },
  colorPrimary: {
    backgroundColor: theme.neutralColor.high.light
  },
  bar: {
    height: 80,
    backgroundColor: theme.feedbackColor.positive.pure
  }
}));

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return <Bar variant='determinate' value={progress > 100 ? 100 : progress} />;
};

export default ProgressBar;
