import * as React from 'react';

import { setTwoToneColor } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import type { ThemeConfig as AntdThemeConfig } from 'antd/es/config-provider/context';
import type { Locale as AntdLocale } from 'antd/es/locale-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';
// eslint-disable-next-line no-restricted-imports
import type { Locale as DateLocale } from 'date-fns';
import { ptBR as datePtBR } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';

import type { HoustonTokens, Spacing } from '@eduzz/houston-tokens';

import DialogGlobal from '../Dialog/Global';
import PopoverRoot from '../Popover/Root';
import ToastContainer from '../Toast/Container';
import ConfigEmotion from './ConfigEmotion';
import createThemeInternal, { CreateTheme } from './createTheme';
import CustomCss from './css/custom';
import ResetCss from './css/reset';
import { mediaUtils } from './mediaQuery';

setDefaultOptions({ locale: datePtBR });
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

  antd: AntdThemeConfig;
}

export interface ThemeProviderProps extends Pick<EmotionThemeProviderProps, 'children'> {
  theme?: CreateTheme;
  /**
   * Dark mode experimental
   */
  mode?: 'dark' | 'light';
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

function ThemeProvider({
  theme = defaultTheme,
  mode = 'light',
  antdLocale = antdLocalePtBR,
  dateFnsLocale = datePtBR,
  children,
  disableDialogs,
  disableResetStyles,
  disableToast
}: ThemeProviderProps) {
  const currentTheme = theme[mode];

  React.useEffect(() => {
    setTwoToneColor(currentTheme.primaryColor);
  }, [currentTheme.primaryColor]);

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
    <ConfigProvider locale={antdLocale} theme={currentTheme.antd}>
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
