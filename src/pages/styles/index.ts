import { HoustonTokens } from '@eduzz/houston-tokens';

import styled from './styled';

export * from './styled';

/**
 * @deprecated Import from `@emotion/styled`
 */
export default styled;

/**
 * @deprecated Use `HoustonTheme` from `@eduzz/houston-ui`
 */
export interface HoustonThemeCustomVariables {}

/**
 * @deprecated Use `HoustonTheme` from `@eduzz/houston-ui`
 */
export interface HoustonThemeProps extends HoustonTokens {
  variables?: HoustonThemeCustomVariables;
}

declare module '@emotion/react' {
  interface Theme extends HoustonThemeProps {}
}
