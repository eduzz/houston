import * as React from 'react';

import { setTwoToneColor } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme';
import type { ThemeConfig as AntdThemeConfig } from 'antd/lib/config-provider/context';
import type { Locale as AntdLocale } from 'antd/lib/locale-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';

import type { HoustonTokens, Spacing } from '@eduzz/houston-tokens';

import DialogGlobal from '../Dialog/Global';
import PopoverRoot from '../Popover/Root';
import ToastContainer from '../Toast/Container';
import ConfigEmotion from './ConfigEmotion';
import createThemeInternal, { CreateTheme } from './createTheme';
import CustomCss from './css/custom';
import ResetCss from './css/reset';
import { mediaUtils } from './mediaQuery';

const mediaDark = window?.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
export const createTheme = createThemeInternal;

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme extends Omit<HoustonTokens, 'hexToRgba' | 'spacing'> {
  mode: 'dark' | 'light';
  primaryColor: string;
  secondaryColor: string;
  mediaQuery: typeof mediaUtils;
  hexToRgba: (hexColor: string, opacity?: number) => string;
  variables?: HoustonThemeCustomVariables;
  spacing: ((unit?: number) => string) & Spacing;

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
  /**
   * @deprecated
   */
  disableCssBaseline?: boolean;
  /**
   * @deprecated
   */
  disabledFontBase?: boolean;
  disableToast?: boolean;
  disableDialogs?: boolean;
}

const defaultTheme = createTheme('eduzz');

function ThemeProvider({
  theme = defaultTheme,
  mode: modeProp = 'light',
  antdLocale = antdLocalePtBR,
  children,
  disableDialogs,
  disableResetStyles,
  disableToast
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
    setTwoToneColor(currentTheme.primaryColor);
  }, [currentTheme.primaryColor]);

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

        <PopoverRoot>
          {!disableToast && <ToastContainer />}
          {!disableDialogs && <DialogGlobal />}

          {children}
        </PopoverRoot>
      </ConfigEmotion>
    </ConfigProvider>
  );
}

export default React.memo(ThemeProvider);
