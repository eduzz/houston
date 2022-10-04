import type { Theme as AntdTheme } from 'antd/lib/config-provider/context';

import type { HoustonTokens } from '@eduzz/houston-tokens';

import { mediaUtils } from '../media';

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme extends HoustonTokens, AntdTheme {
  media: typeof mediaUtils;
  variables?: HoustonThemeCustomVariables;
}

declare module '@emotion/react' {
  interface Theme extends HoustonTheme {}
}
