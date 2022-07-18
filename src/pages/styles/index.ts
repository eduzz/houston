import { HoustonTokens } from '@eduzz/houston-tokens';

import styled from './styled';

export * from './styled';

export default styled;

export interface HoustonThemeCustomVariables {}

export interface HoustonThemeProps extends HoustonTokens {
  variables?: HoustonThemeCustomVariables;
}

declare module '@emotion/react' {
  interface Theme extends HoustonThemeProps {}
}
