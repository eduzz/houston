import * as React from 'react';

import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';

import { HoustonTokens } from '@eduzz/houston-tokens';

export interface IThemeProvider {
  theme: HoustonTokens;
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ theme, children }) => {
  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>;
};

export default ThemeProvider;
