import emotionStyled from '@emotion/styled';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

export { keyframes } from '@emotion/react';
export { cx } from '@emotion/css';

export const breakpoints = createBreakpoints({});
const styled = emotionStyled;

export interface IStyledProp {
  className?: string;
}

export default styled;
