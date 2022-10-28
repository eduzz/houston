import * as React from 'react';

import { setTwoToneColor } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';
import type { Theme as AntdTheme } from 'antd/lib/config-provider/context';
import { Locale as AntdLocale } from 'antd/lib/locale-provider';
import antdLocalePtBR from 'antd/lib/locale/pt_BR';
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
  /**
   * @deprecated
   */
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

function ThemeProvider({
  theme = defaultTheme,
  antdLocale = antdLocalePtBR,
  dateFnsLocale = datePtBR,
  children,
  disableDialogs,
  disableToast
}: ThemeProviderProps) {
  React.useEffect(() => {
    setTwoToneColor(theme.primaryColor);
    ConfigProvider.config({ theme: { primaryColor: theme.primaryColor } });
  }, [theme.primaryColor]);

  React.useEffect(() => {
    setDefaultOptions({ locale: dateFnsLocale });
  }, [dateFnsLocale]);

  return (
    <EmotionThemeProvider theme={theme}>
      <ConfigProvider locale={antdLocale}>
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
