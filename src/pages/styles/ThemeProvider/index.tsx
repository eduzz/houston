import * as React from 'react';

import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { ConfigProvider } from 'antd';

import { HoustonTheme } from '..';

export interface ThemeProviderProps {
  theme: HoustonTheme;
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  React.useEffect(() => {
    ConfigProvider.config({
      theme: { primaryColor: theme.primaryColor }
    });
  }, [theme.primaryColor]);

  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>;
};

export default ThemeProvider;
