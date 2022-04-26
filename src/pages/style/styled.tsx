import './types';

import { cx as emotionCx } from '@emotion/css';
import emotionStyled from '@emotion/styled';

import { breakpoinstUtils } from '@eduzz/houston-tokens/variables/breakpoints';

export const clsx = emotionCx;
export const cx = emotionCx;

export const breakpoints = breakpoinstUtils;
const styled = emotionStyled;

export interface IStyledProp {
  className?: string;
}

export default styled;
