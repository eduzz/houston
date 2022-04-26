import { BrandColors, Brands, HoustonTokens } from './types';
import { border } from './variables/border';
import { createBrandColors } from './variables/brand';
import { breakpoinstUtils, breakpoints } from './variables/breakpoints';
import { feedbackColor } from './variables/feedbackColor';
import { font } from './variables/font';
import { line } from './variables/line';
import { neutralColor } from './variables/neutralColor';
import { opacity } from './variables/opacity';
import { shadow } from './variables/shadow';
import { spacing } from './variables/spacing';
import { pxToRem } from './variables/utils';

export * from './types';

export function createTokens(brand: keyof Omit<BrandColors, 'custom'>): HoustonTokens;
export function createTokens(brand: 'custom', custom: BrandColors['custom']): HoustonTokens;
export function createTokens<B extends Brands>(brand: B, custom?: BrandColors[B]): HoustonTokens {
  return {
    spacing,
    border,
    brandColor: createBrandColors(brand, custom),
    breakpoints: {
      ...breakpoints,
      ...breakpoinstUtils
    },
    feedbackColor,
    font,
    line,
    neutralColor,
    opacity,
    shadow,
    pxToRem
  };
}
