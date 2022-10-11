/* eslint-disable import/export */
import createTokens, { BrandColor as DeprecatedBrandColor } from '@eduzz/houston-tokens';
import { brands as deprecatedBrands } from '@eduzz/houston-tokens/variables/brand';

import { HoustonThemeCustomVariables, HoustonTheme } from '..';
import { mediaUtils } from '../mediaQuery';
import { BrandsBuildin, brandsPrimaryColor } from './brands';
import { hexToRgba, spacing } from './utils';

const DEFAULT_PRIMARY_COLOR = '#0d2772';

export default function createTheme(brand: BrandsBuildin, variables?: HoustonThemeCustomVariables): HoustonTheme;
export default function createTheme(primaryColor: `#${string}`, variables?: HoustonThemeCustomVariables): HoustonTheme;
/**
 * @deprecated use other overload, passing a `brand string (ex. eduzz)` or a `simple primary/secondary color (ex. { primary: '#ff0', secondary: '#ff0' })`
 */
export default function createTheme(
  deprecated: DeprecatedBrandColor,
  variables?: HoustonThemeCustomVariables
): HoustonTheme;
export default function createTheme(
  brand: BrandsBuildin | `#${string}` | DeprecatedBrandColor,
  variables?: HoustonThemeCustomVariables
): HoustonTheme {
  const brandColor = resolveBrandColor(brand);
  const { spacing: spacingTokens, ...tokens } = createTokens(brandColor.deprecated);

  Object.keys(spacingTokens).forEach(key => {
    spacing[key] = spacingTokens[key];
  });

  return {
    ...tokens,
    primaryColor: brandColor.antd ?? DEFAULT_PRIMARY_COLOR,
    mediaQuery: mediaUtils,
    spacing: spacing as any,
    hexToRgba,
    variables
  };
}

function resolveBrandColor(brand: BrandsBuildin | `#${string}` | DeprecatedBrandColor): {
  antd: string;
  deprecated: DeprecatedBrandColor;
} {
  if (typeof brand !== 'string') {
    return {
      antd: (brand as DeprecatedBrandColor).primary.pure,
      deprecated: brand as DeprecatedBrandColor
    };
  }

  if (brand.startsWith('#')) {
    return {
      antd: brand,
      deprecated: {
        primary: { dark: brand, light: brand, pure: brand, medium: brand },
        secondary: { dark: brand, light: brand, pure: brand, medium: brand }
      }
    };
  }

  return {
    antd: brandsPrimaryColor[brand],
    deprecated: deprecatedBrands[brand]
  };
}
