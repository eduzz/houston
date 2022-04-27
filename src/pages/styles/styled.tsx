import '.';

import { keyframes as keyframesEmotion, cx as cxEmotion } from '@emotion/css';
import emotionStyled from '@emotion/styled';

import { breakpoinstUtils } from '@eduzz/houston-tokens/variables/breakpoints';

export interface IStyledProp {
  className?: string;
}

export const keyframes = keyframesEmotion;
export const cx = cxEmotion;
export const clsx = cxEmotion;
export const breakpoints = breakpoinstUtils;

const styled = emotionStyled;
export default styled;
