import { cx as cxEmotion, CSSInterpolation as CSSInterpolationType } from '@emotion/css';
import { css as cssEmotion, keyframes as keyframesEmotion, Global as GlobalEmotion } from '@emotion/react';
import emotionStyled from '@emotion/styled';

import { breakpoinstUtils } from '@eduzz/houston-tokens/variables/breakpoints';

export interface IStyledProp {
  className?: string;
}

export type CSSInterpolation = CSSInterpolationType;
export const GlobalStyles = GlobalEmotion;
export const keyframes = keyframesEmotion;
export const cx = cxEmotion;
export const clsx = cxEmotion;
export const css = cssEmotion;
export const breakpoints = breakpoinstUtils;

const styled = emotionStyled;
export default styled;
