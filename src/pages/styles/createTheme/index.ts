import createTokens, { BrandColor, Brands } from '@eduzz/houston-tokens';

import { HoustonThemeProps, HoustonThemeCustomVariables } from '..';

export default function createTheme(
  brand: Brands | BrandColor,
  variables?: HoustonThemeCustomVariables
): HoustonThemeProps {
  return { ...createTokens(brand), variables };
}
