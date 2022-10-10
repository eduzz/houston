import * as React from 'react';

import { setTwoToneColor } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

import { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
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
import generateTheme from './_generator';
import { setCurrentTheme } from './_state';
import createThemeInternal from './createTheme';
import { mediaUtils } from './media';
import GlobalStyles from './reset';

setDefaultOptions({ locale: datePtBR });
export const createTheme = createThemeInternal;

export interface HoustonThemeCustomVariables {}

export interface HoustonTheme extends Omit<HoustonTokens, 'hexToRgba' | 'spacing'>, AntdTheme {
  primaryColor: string;
  media: typeof mediaUtils;
  hexToRgba: (hexColor: string, opacity?: number) => string;
  variables?: HoustonThemeCustomVariables;
  spacing: ((unit?: number) => number) & Spacing;
}

export interface ThemeProviderProps extends Pick<EmotionThemeProviderProps, 'children'> {
  theme?: HoustonTheme;
  antdLocale?: AntdLocale;
  dateFnsLocale?: DateLocale;
  disableResetStyles?: boolean;
  disableCssBaseline?: boolean;
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
  disableResetStyles,
  disableCssBaseline,
  disabledFontBase,
  disableDialogs,
  disableToast
}: ThemeProviderProps) {
  const [muiTheme] = React.useState(() => generateTheme(theme));

  React.useEffect(() => {
    if (disabledFontBase) {
      return undefined;
    }

    const styleElement = document.createElement('link');

    styleElement.rel = 'stylesheet';
    styleElement.href = '//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700';

    document.head.appendChild(styleElement);

    return () => styleElement.remove();
  }, [disabledFontBase]);

  React.useEffect(() => {
    setTwoToneColor(theme.primaryColor);
    ConfigProvider.config({ theme: { primaryColor: theme.primaryColor } });
  }, [theme.primaryColor]);

  React.useEffect(() => setCurrentTheme(theme), [theme]);

  React.useEffect(() => {
    setDefaultOptions({ locale: dateFnsLocale });
  }, [dateFnsLocale]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <ConfigProvider locale={antdLocale}>
          <PopoverRoot>
            {!disableToast && <ToastContainer />}
            {!disableDialogs && <DialogGlobal />}
            {!disableCssBaseline && <CssBaseline />}
            {!disableResetStyles && <GlobalStyles />}
            {children}
          </PopoverRoot>
        </ConfigProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
