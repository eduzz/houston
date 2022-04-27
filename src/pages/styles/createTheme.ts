import createTokens, { BrandColor, Brands } from '@eduzz/houston-tokens';

import { IHoustonTheme, IHoustonThemeCustomVariables } from '.';

export default function createTheme(
  brand: Brands | BrandColor,
  variables?: IHoustonThemeCustomVariables
): IHoustonTheme {
  return { ...createTokens(brand), variables };
}
