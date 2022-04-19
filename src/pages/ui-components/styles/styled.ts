import { cx as emotionCx } from '@emotion/css';
import emotionStyled from '@emotion/styled';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

export { keyframes } from '@emotion/react';

export const clsx = emotionCx;
export const cx = emotionCx;

export interface IStyledProp {
  className?: string;
}

export const breakpoints = createBreakpoints({});
const styled = emotionStyled;

export default styled;
