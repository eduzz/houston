import { cx as cxEmotion } from '@emotion/css';
import { css as cssEmotion, keyframes as keyframesEmotion } from '@emotion/react';
import emotionStyled from '@emotion/styled';

export interface StyledProp {
  className?: string;
}

export const keyframes = keyframesEmotion;
export const cx = cxEmotion;
export const clsx = cxEmotion;
export const css = cssEmotion;
export const styled = emotionStyled;
