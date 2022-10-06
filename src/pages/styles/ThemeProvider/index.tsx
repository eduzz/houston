import * as React from 'react';

import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';

import { HoustonThemeProps } from '..';

export interface ThemeProviderProps {
  theme: HoustonThemeProps;
  children?: React.ReactNode;
}

/**
 * @deprecated
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeProviderEmotion theme={theme as any}>{children}</ThemeProviderEmotion>;
};

export default ThemeProvider;
