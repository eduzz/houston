/* eslint-disable import/export */

import antdTheme from './antd';
import { beltColor, beltForegroundColor } from './beltColor';
import { BrandColor, BrandsBuildin, brandsColors } from './brands';
import { hexToRgba, spacing, pxToRem } from './utils';
import { HoustonThemeCustomVariables, HoustonTheme } from '..';
import { mediaUtils } from '../mediaQuery';

const DEFAULT_PRIMARY_COLOR = '#0d2772';
const DEFAULT_SECONDARY_COLOR = '#FFBC00';

export type CreateTheme = { light: HoustonTheme; dark: HoustonTheme };

export default function createTheme(
  brand: BrandsBuildin | BrandColor,
  variables?: HoustonThemeCustomVariables
): CreateTheme {
  const brandColor = resolveBrandColor(brand);

  const base: Omit<HoustonTheme, 'mode' | 'antd'> = {
    primaryColor: brandColor.primary ?? DEFAULT_PRIMARY_COLOR,
    secondaryColor: brandColor.secondary ?? DEFAULT_SECONDARY_COLOR,
    mediaQuery: mediaUtils,
    spacing: spacing as any,
    beltColor,
    beltForegroundColor,
    hexToRgba,
    pxToRem,
    components: {
      topBarHeight: 64
    },
    variables
  };

  return {
    light: { mode: 'light', ...base, antd: antdTheme(brandColor, 'light') },
    dark: { mode: 'dark', ...base, antd: antdTheme(brandColor, 'dark') }
  };
}

function resolveBrandColor(brand: BrandsBuildin | BrandColor): BrandColor {
  if (typeof brand !== 'string' && typeof brand.primary === 'string' && typeof brand.secondary === 'string') {
    return brand as BrandColor;
  }

  return brandsColors[brand as BrandsBuildin];
}
