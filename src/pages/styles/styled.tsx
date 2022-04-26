import '.';

import emotionStyled from '@emotion/styled';

export { breakpoinstUtils as breakpoints } from '@eduzz/houston-tokens/variables/breakpoints';
export { keyframes, cx, cx as clsx } from '@emotion/css';

export interface IStyledProp {
  className?: string;
}

const styled = emotionStyled;
export default styled;
