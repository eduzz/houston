import * as React from 'react';

import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';

import { IHoustonTheme } from '..';

export interface IThemeProvider {
  theme: IHoustonTheme;
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ theme, children }) => {
  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>;
};

export default ThemeProvider;
