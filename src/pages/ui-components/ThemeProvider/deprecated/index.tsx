import * as React from 'react';

import { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';
//@ts-ignore
import CssBaseline from '@mui/material/CssBaseline';
//@ts-ignore
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ptBR } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';

import { HoustonThemeProps } from '@eduzz/houston-styles';
import createThemeStyles from '@eduzz/houston-styles/createTheme';

import generateTheme from './_generator';
import GlobalStyles from './reset';
import DialogGlobal from '../../Dialog/Global';
import PopoverRoot from '../../Popover/Root';
import ToastContainer from '../../Toast/Container';

setDefaultOptions({ locale: ptBR });

export const createTheme = createThemeStyles;

export interface ThemeProviderProps extends Pick<EmotionThemeProviderProps, 'children'> {
  theme?: HoustonThemeProps;
  disableResetStyles?: boolean;
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  disableToast?: boolean;
  disableDialogs?: boolean;
}

const defaultTheme = createTheme('eduzz');

function ThemeProvider({
  theme = defaultTheme,
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

  return (
    <StyledEngineProvider injectFirst={false}>
      <MUIThemeProvider theme={muiTheme}>
        <PopoverRoot>
          {!disableToast && <ToastContainer />}
          {!disableDialogs && <DialogGlobal />}
          {!disableCssBaseline && <CssBaseline />}
          {!disableResetStyles && <GlobalStyles />}
          {children}
        </PopoverRoot>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
