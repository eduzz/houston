/* eslint-disable import/export */
import createTokens, { BrandColor as DeprecatedBrandColor } from '@eduzz/houston-tokens';
import { brands as deprecatedBrands } from '@eduzz/houston-tokens/variables/brand';

import { mediaUtils } from '../media';
import { BrandsBuildin, brandsPrimaryColor } from './brands';
import { HoustonTheme, HoustonThemeCustomVariables } from './types';

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
  return {
    primaryColor: brandColor.antd,
    media: mediaUtils,
    ...createTokens(brandColor.deprecated),
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
