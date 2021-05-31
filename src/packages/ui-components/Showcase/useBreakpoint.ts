import { Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStepHandler = (size?: string) => {
  const theme = useTheme();
  const small = useMediaQuery<Theme>(theme.breakpoints.up('xs'));
  const medium = useMediaQuery<Theme>(theme.breakpoints.up('sm'));
  const large = useMediaQuery<Theme>(theme.breakpoints.up('md'));

  return size === 'small' || (small && !medium)
    ? 'small'
    : size === 'medium' || (medium && !large)
    ? 'medium'
    : 'large';
};

export default useStepHandler;
