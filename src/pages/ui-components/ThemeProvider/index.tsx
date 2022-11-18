import * as React from 'react';

import { setTwoToneColor } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import type { Theme as AntdTheme, ThemeConfig } from 'antd/es/config-provider/context';
import type { Locale as AntdLocale } from 'antd/es/locale-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';
// eslint-disable-next-line no-restricted-imports
import type { Locale as DateLocale } from 'date-fns';
import { ptBR as datePtBR } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';

import type { HoustonTokens, Spacing } from '@eduzz/houston-tokens';

import DialogGlobal from '../Dialog/Global';
import PopoverRoot from '../Popover/Root';
import ToastContainer from '../Toast/Container';
import createThemeInternal from './createTheme';
import { mediaUtils } from './mediaQuery';
import ResetCss from './reset';

setDefaultOptions({ locale: datePtBR });
export const createTheme = createThemeInternal;

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme extends Omit<HoustonTokens, 'hexToRgba' | 'spacing'>, AntdTheme {
  primaryColor: string;
  secondaryColor: string;
  mediaQuery: typeof mediaUtils;
  hexToRgba: (hexColor: string, opacity?: number) => string;
  variables?: HoustonThemeCustomVariables;
  spacing: ((unit?: number) => string) & Spacing;
}

export interface ThemeProviderProps extends Pick<EmotionThemeProviderProps, 'children'> {
  theme?: HoustonTheme;
  antdLocale?: AntdLocale;
  dateFnsLocale?: DateLocale;
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

declare module '@emotion/react' {
  interface Theme extends HoustonTheme {}
}

const antdTokens: ThemeConfig = {
  token: {
    colorPrimary: 'red',
    controlHeight: 42,
    fontFamily: 'Albert Sans',
    fontSize: 14
  },
  components: {
    Button: {}
  }
};

function ThemeProvider({
  theme = defaultTheme,
  antdLocale = antdLocalePtBR,
  dateFnsLocale = datePtBR,
  children,
  disableDialogs,
  disableResetStyles,
  disableToast
}: ThemeProviderProps) {
  React.useEffect(() => {
    setTwoToneColor(theme.primaryColor);
  }, [theme.primaryColor]);

  React.useEffect(() => {
    setDefaultOptions({ locale: dateFnsLocale });
  }, [dateFnsLocale]);

  React.useEffect(() => {
    const styleElement = document.createElement('link');

    styleElement.rel = 'stylesheet';
    styleElement.href = '//fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700';

    document.head.appendChild(styleElement);

    return () => styleElement.remove();
  }, []);

  return (
    <EmotionThemeProvider theme={theme}>
      {!disableResetStyles && <ResetCss />}

      <ConfigProvider locale={antdLocale} theme={antdTokens}>
        <PopoverRoot>
          {!disableToast && <ToastContainer />}
          {!disableDialogs && <DialogGlobal />}
          {children}
        </PopoverRoot>
      </ConfigProvider>
    </EmotionThemeProvider>
  );
}

export default React.memo(ThemeProvider);
