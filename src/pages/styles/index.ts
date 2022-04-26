import { HoustonTokens } from '@eduzz/houston-tokens';

export * from './styled';

export interface IHoustonThemeCustomVariables {}

export interface IHoustonTheme extends HoustonTokens {
  variables?: IHoustonThemeCustomVariables;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Theme extends IHoustonTheme {}
}
