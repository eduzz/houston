import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ptBR } from 'date-fns/locale';

import { IHoustonTheme } from '@eduzz/houston-styles';
import createTheme from '@eduzz/houston-styles/createTheme';

import PopoverRoot from '../Popover/Root';
import ToastContainer from '../Toast/Container';
import generateTheme from './_generator';
import { setCurrentTheme } from './_state';

export interface IThemeProviderProps extends Pick<ThemeProviderProps, 'children'> {
  theme?: IHoustonTheme;
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  disableToast?: boolean;
}

const defaultTheme = createTheme('orbita');

function ThemeProvider({
  theme = defaultTheme,
  children,
  disableCssBaseline,
  disabledFontBase,
  disableToast
}: IThemeProviderProps) {
  const [muiTheme] = React.useState(() => generateTheme(theme));

  const [styleContent] = React.useState(() => ({
    __html: `
        form { width: 100%; }
        a { text-decoration: none; }
        .houston-icon { line-height: 0; }

        ${
          !disabledFontBase &&
          `
        body {
          font-family: ${theme.font.family.base};
          font-size: ${theme.font.size.xs};
          -webkit-font-smoothing: auto;
        }
      `
        }
      `
  }));

  React.useEffect(() => {
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = '//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700';

    document.head.appendChild(el);

    return () => el.remove();
  }, []);

  React.useEffect(() => setCurrentTheme(theme), [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
          <PopoverRoot>
            <style dangerouslySetInnerHTML={styleContent} />

            {!disableToast && <ToastContainer />}
            {!disableCssBaseline && <CssBaseline />}
            {children}
          </PopoverRoot>
        </LocalizationProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
