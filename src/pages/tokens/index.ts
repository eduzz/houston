import type { BrandColor, Brands, HoustonTokens } from './types';
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
import { pxToRem, hexToRgba, remToPx, cleanUnit } from './variables/utils';

export * from './types';

export default function createTokens(brand: Brands | BrandColor): HoustonTokens {
  return {
    spacing,
    border,
    brandColor: createBrandColors(brand),
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
    pxToRem,
    remToPx,
    hexToRgba,
    cleanUnit
  };
}
