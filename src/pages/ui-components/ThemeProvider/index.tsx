import * as React from 'react';

import { ConfigProvider } from 'antd';
import type { AliasToken } from 'antd/es/theme/interface';
import type { ThemeConfig as AntdThemeConfig } from 'antd/lib/config-provider/context';
import type { Locale as AntdLocale } from 'antd/lib/locale-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';

import ConfigEmotion from './ConfigEmotion';
import createThemeInternal, { CreateTheme } from './createTheme';
import CustomCss from './css/custom';
import ResetCss from './css/reset';
import { mediaUtils } from './mediaQuery';

const mediaDark =
  typeof window !== 'undefined' && window?.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

export const createTheme = createThemeInternal;

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme {
  mode: 'dark' | 'light';
  primaryColor: string;
  secondaryColor: string;
  mediaQuery: typeof mediaUtils;
  hexToRgba: (hexColor: string, opacity?: number) => string;
  variables?: HoustonThemeCustomVariables;
  spacing: (unit?: number) => string;

  components: {
    topBarHeight: number;
  };

  antd: AntdThemeConfig;
}

declare module '@emotion/react' {
  interface Theme extends Omit<HoustonTheme, 'antd'> {
    antd: AliasToken;
  }
}

export interface ThemeProviderProps extends Pick<EmotionThemeProviderProps, 'children'> {
  theme?: CreateTheme;
  /**
   * Dark mode experimental
   */
  mode?: 'dark' | 'light' | 'system';
  antdLocale?: AntdLocale;
  disableResetStyles?: boolean;
}

const defaultTheme = createTheme('eduzz');

function ThemeProvider({
  theme = defaultTheme,
  mode: modeProp = 'light',
  antdLocale = antdLocalePtBR,
  children,
  disableResetStyles
}: ThemeProviderProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
    if (modeProp !== 'system') {
      return modeProp;
    }

    return mediaDark?.matches ? 'dark' : 'light';
  });

  const currentTheme = theme[mode];

  React.useEffect(() => {
    if (modeProp !== 'system') return setMode(modeProp ?? 'light');
    if (!mediaDark) return setMode('light');

    const listner = (event: MediaQueryListEvent) => setMode(() => (event.matches ? 'dark' : 'light'));
    mediaDark.addEventListener('change', listner);
    return () => mediaDark.removeEventListener('change', listner);
  }, [modeProp]);

  React.useEffect(() => {
    const styleElement = document.createElement('link');

    styleElement.rel = 'stylesheet';
    styleElement.href = '//fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700';

    document.head.appendChild(styleElement);

    return () => styleElement.remove();
  }, []);

  return (
    <ConfigProvider locale={antdLocale} theme={currentTheme.antd} componentSize='large'>
      <ConfigEmotion theme={currentTheme}>
        {!disableResetStyles && <ResetCss />}
        <CustomCss />

        {children}
      </ConfigEmotion>
    </ConfigProvider>
  );
}

export default React.memo(ThemeProvider);
