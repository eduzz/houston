import type { Theme as AntdTheme } from 'antd/lib/config-provider/context';

import type { HoustonTokens, Spacing } from '@eduzz/houston-tokens';

import { mediaUtils } from '../media';

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme extends Omit<HoustonTokens, 'hexToRgba' | 'spacing'>, AntdTheme {
  primaryColor: string;
  media: typeof mediaUtils;
  hexToRgba: (hexColor: string, opacity?: number) => string;
  variables?: HoustonThemeCustomVariables;
  spacing: ((unit?: number) => number) & Spacing;
}

declare module '@emotion/react' {
  interface Theme extends HoustonTheme {}
}
