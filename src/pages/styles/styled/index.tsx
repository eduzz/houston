import { cx as cxEmotion, CSSInterpolation as CSSInterpolationType } from '@emotion/css';
import { css as cssEmotion, keyframes as keyframesEmotion, Global as GlobalEmotion } from '@emotion/react';
import emotionStyled from '@emotion/styled';

import { breakpoinstUtils } from '@eduzz/houston-tokens/variables/breakpoints';

/**
 * @deprecated
 */
export interface StyledProp {
  className?: string;
}

/**
 * @deprecated Import from `@emotion/css`
 */
export type CSSInterpolation = CSSInterpolationType;
/**
 * @deprecated Import from `@emotion/react`
 */
export const GlobalStyles = GlobalEmotion;
/**
 * @deprecated Import from `@emotion/react`
 */
export const keyframes = keyframesEmotion;
/**
 * @deprecated Import from `@emotion/css`
 */
export const cx = cxEmotion;
/**
 * @deprecated Import cx from `@emotion/css`
 */
export const clsx = cxEmotion;
/**
 * @deprecated Import from `@emotion/react`
 */
export const css = cssEmotion;
/**
 * @deprecated
 */
export const breakpoints = breakpoinstUtils;

/**
 * @deprecated Import from `@emotion/styled`
 */
const styled = emotionStyled;

/**
 * @deprecated Import from `@emotion/styled`
 */
export default styled;
