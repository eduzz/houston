import { cx as emotionCx } from '@emotion/css';
import emotionStyled from '@emotion/styled';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

export const clsx = emotionCx;
export const cx = emotionCx;

export const breakpoints = createBreakpoints({});
const styled = emotionStyled;

export interface IStyledProp {
  className?: string;
}

export default styled;
