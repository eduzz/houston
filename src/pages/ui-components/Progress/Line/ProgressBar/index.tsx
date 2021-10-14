import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

interface IProgressBarProps {
  progress: number;
}

const Bar = styled(LinearProgress)(({ theme }) => ({
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
}));

const ProgressBar = ({ progress }: IProgressBarProps) => {
  return <Bar variant='determinate' value={progress > 100 ? 100 : progress} />;
};

export default ProgressBar;
