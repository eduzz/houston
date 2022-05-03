import { HoustonTokens } from '@eduzz/houston-tokens';

import styled from './styled';

export * from './styled';

export default styled;

export interface IHoustonThemeCustomVariables {}

export interface IHoustonTheme extends HoustonTokens {
  variables?: IHoustonThemeCustomVariables;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Theme extends IHoustonTheme {}
}
