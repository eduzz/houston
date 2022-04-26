import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ptBR, enUS } from 'date-fns/locale';

import HoustonThemeProvider from '@eduzz/houston-style/ThemeProvider';
import { HoustonTokens } from '@eduzz/houston-tokens';

import ToastContainer from '../../Toast/Container';
import generateTheme from './_generator';
import { setCurrentTheme } from './_state';

export interface IThemeProviderProps extends Pick<ThemeProviderProps, 'children'> {
  theme?: HoustonTokens;
  locale?: 'pt-BR' | 'en-US';
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  disableToast?: boolean;
}

function ThemeProvider({
  children,
  theme,
  disableCssBaseline,
  disabledFontBase,
  disableToast,
  locale = 'pt-BR'
}: IThemeProviderProps) {
  const muiTheme = React.useMemo(() => generateTheme(theme), [theme]);

  const fontBaseBody = React.useMemo(
    () =>
      !disabledFontBase &&
      `
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700');

        body {
          font-family: ${theme.font.family};
          font-size: ${theme.font.size.xs}px;
          -webkit-font-smoothing: auto;
        }
      `,
    [disabledFontBase, theme.font.family, theme.font.size.xs]
  );

  const styleContent = React.useMemo(
    () => ({
      __html: `
        form {
          width: 100%;
        }

        a {
          text-decoration: none;
        }

        .houston-icon {
          line-height: 0;
        }

        ${fontBaseBody}
      `
    }),
    [fontBaseBody]
  );

  const localeNavigator = React.useMemo(() => {
    if (locale === 'pt-BR') {
      return ptBR;
    }

    return enUS;
  }, [locale]);

  React.useEffect(() => setCurrentTheme(theme), [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <HoustonThemeProvider theme={theme}>
          <LocalizationProvider locale={localeNavigator} dateAdapter={AdapterDateFns}>
            <style dangerouslySetInnerHTML={styleContent} />

            {!disableToast && <ToastContainer />}
            {!disableCssBaseline && <CssBaseline />}
            {children}
          </LocalizationProvider>
        </HoustonThemeProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
