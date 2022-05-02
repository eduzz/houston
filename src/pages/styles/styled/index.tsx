import { keyframes as keyframesEmotion, cx as cxEmotion, css as cssEmotion } from '@emotion/css';
import emotionStyled from '@emotion/styled';

import { breakpoinstUtils } from '@eduzz/houston-tokens/variables/breakpoints';

export interface IStyledProp {
  className?: string;
}

export const keyframes = keyframesEmotion;
export const cx = cxEmotion;
export const clsx = cxEmotion;
export const css = cssEmotion;
export const breakpoints = breakpoinstUtils;

const styled = emotionStyled;
export default styled;
