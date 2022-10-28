import { cx as cxEmotion } from '@emotion/css';
import { css as cssEmotion, keyframes as keyframesEmotion, Global as GlobalEmotion } from '@emotion/react';
import emotionStyled from '@emotion/styled';

export interface StyledProp {
  className?: string;
}

export const keyframes = keyframesEmotion;
export const cx = cxEmotion;
export const clsx = cxEmotion;
export const css = cssEmotion;
export const styled = emotionStyled;
export const GlobalStyles = GlobalEmotion;

export default styled;
