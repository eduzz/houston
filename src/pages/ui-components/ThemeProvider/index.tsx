import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ptBR } from 'date-fns/locale';

import { IHoustonTheme } from '@eduzz/houston-styles';
import createTheme from '@eduzz/houston-styles/createTheme';

import PopoverRoot from '../Popover/Root';
import ToastContainer from '../Toast/Container';
import generateTheme from './_generator';
import { setCurrentTheme } from './_state';
import GlobalStyles from './reset';

export interface IThemeProviderProps extends Pick<ThemeProviderProps, 'children'> {
  theme?: IHoustonTheme;
  disableResetStyles?: boolean;
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  disableToast?: boolean;
}

const defaultTheme = createTheme('orbita');

function ThemeProvider({
  theme = defaultTheme,
  children,
  disableResetStyles,
  disableCssBaseline,
  disabledFontBase,
  disableToast
}: IThemeProviderProps) {
  const [muiTheme] = React.useState(() => generateTheme(theme));

  React.useEffect(() => {
    if (!disabledFontBase) {
      return undefined;
    }

    const styleElement = document.createElement('link');

    styleElement.rel = 'stylesheet';
    styleElement.href = '//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700';

    document.head.appendChild(styleElement);

    return () => styleElement.remove();
  }, [disabledFontBase]);

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
        <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
          <PopoverRoot>
            {!disableToast && <ToastContainer />}
            {!disableCssBaseline && <CssBaseline />}
            {!disableResetStyles && <GlobalStyles />}
            {children}
          </PopoverRoot>
        </LocalizationProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
