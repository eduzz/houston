import { Theme as AntdTheme } from 'antd/lib/config-provider/context';

import { HoustonTokens } from '@eduzz/houston-tokens';

import { mediaUtils } from './media';
import styled from './styled';

export * from './styled';

export default styled;

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme extends HoustonTokens, AntdTheme {
  media: typeof mediaUtils;
  variables?: HoustonThemeCustomVariables;
}

/**
 * @depreacted Use `HoustonTheme` instead
 */
export type HoustonThemeProps = HoustonTheme;

declare module '@emotion/react' {
  interface Theme extends HoustonTheme {}
}
