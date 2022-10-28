/* eslint-disable import/export */
import createTokens, { BrandColor as DeprecatedBrandColor } from '@eduzz/houston-tokens';
import { brands as deprecatedBrands } from '@eduzz/houston-tokens/variables/brand';

import { HoustonThemeCustomVariables, HoustonTheme } from '..';
import { mediaUtils } from '../mediaQuery';
import { BrandColor, BrandsBuildin, brandsColors } from './brands';
import { hexToRgba, spacing } from './utils';

const DEFAULT_PRIMARY_COLOR = '#0d2772';
const DEFAULT_SECONDARY_COLOR = '#FFBC00';

export default function createTheme(brand: BrandsBuildin, variables?: HoustonThemeCustomVariables): HoustonTheme;
export default function createTheme(brand: BrandColor, variables?: HoustonThemeCustomVariables): HoustonTheme;
/**
 * @deprecated use other overload, passing a `brand string (ex. eduzz)` or a `simple primary/secondary color (ex. { primary: '#ff0', secondary: '#ff0' })`
 */
export default function createTheme(
  deprecated: DeprecatedBrandColor,
  variables?: HoustonThemeCustomVariables
): HoustonTheme;
export default function createTheme(
  brand: BrandsBuildin | BrandColor | DeprecatedBrandColor,
  variables?: HoustonThemeCustomVariables
): HoustonTheme {
  const brandColor = resolveBrandColor(brand);
  const { spacing: spacingTokens, ...tokens } = createTokens(brandColor.deprecated);

  Object.keys(spacingTokens).forEach(key => {
    spacing[key] = spacingTokens[key];
  });

  return {
    ...tokens,
    primaryColor: brandColor.antd.primary ?? DEFAULT_PRIMARY_COLOR,
    secondaryColor: brandColor.antd.secondary ?? DEFAULT_SECONDARY_COLOR,
    mediaQuery: mediaUtils,
    spacing: spacing as any,
    hexToRgba,
    variables
  };
}

function resolveBrandColor(brand: BrandsBuildin | BrandColor | DeprecatedBrandColor): {
  antd: BrandColor;
  deprecated: DeprecatedBrandColor;
} {
  if (typeof brand !== 'string' && typeof brand.primary !== 'string') {
    return {
      antd: {
        primary: (brand as DeprecatedBrandColor).primary.pure as any,
        secondary: (brand as DeprecatedBrandColor).secondary.pure as any
      },
      deprecated: brand as DeprecatedBrandColor
    };
  }

  if (typeof brand !== 'string' && typeof brand.primary === 'string' && typeof brand.secondary === 'string') {
    return {
      antd: brand as BrandColor,
      deprecated: {
        primary: { dark: brand.primary, light: brand.primary, pure: brand.primary, medium: brand.primary },
        secondary: { dark: brand.secondary, light: brand.secondary, pure: brand.secondary, medium: brand.secondary }
      }
    };
  }

  return {
    antd: brandsColors[brand as BrandsBuildin],
    deprecated: deprecatedBrands[brand as BrandsBuildin]
  };
}
