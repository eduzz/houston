import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ptBR, enUS } from 'date-fns/locale';

import { Brands, createTokens } from '@eduzz/houston-tokens';

import ToastContainer from '../../Toast/Container';
import generateTheme from './_generator';
import { setCurrentTheme } from './_state';

export interface IThemeProviderProps extends Pick<ThemeProviderProps, 'children'> {
  brand?: Brands;
  locale?: 'pt-BR' | 'en-US';
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  disableToast?: boolean;
}

function ThemeProvider({
  children,
  brand = 'orbita',
  disableCssBaseline,
  disabledFontBase,
  disableToast,
  locale = 'pt-BR'
}: IThemeProviderProps) {
  const [tokens] = React.useState(() => createTokens(brand as any));
  const muiTheme = React.useMemo(() => generateTheme(tokens), [tokens]);

  const fontBaseBody = React.useMemo(
    () =>
      !disabledFontBase &&
      `
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700');

        body {
          font-family: ${tokens.font.family};
          font-size: ${tokens.font.size.xs}px;
          -webkit-font-smoothing: auto;
        }
      `,
    [disabledFontBase, tokens.font.family, tokens.font.size.xs]
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

  React.useEffect(() => setCurrentTheme(tokens), [tokens]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <LocalizationProvider locale={localeNavigator} dateAdapter={AdapterDateFns}>
          <style dangerouslySetInnerHTML={styleContent} />

          {!disableToast && <ToastContainer />}
          {!disableCssBaseline && <CssBaseline />}
          {children}
        </LocalizationProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
