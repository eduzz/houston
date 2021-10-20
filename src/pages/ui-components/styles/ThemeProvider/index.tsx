import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { _setCurrentTheme } from '../../Toast';
import ToastContainer from '../../Toast/Container';
import { HoustonThemeBuilder } from '../types';
import generateTheme from './_default';
import defaultThemeVariables from './_default/variables';
import ContextTheme from './context';

type IThemeExtends = 'children';

export interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
  theme?: HoustonThemeBuilder;
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  disableToast?: boolean;
}

function ThemeProvider({ children, theme, disableCssBaseline, disabledFontBase, disableToast }: IThemeProviderProps) {
  const muiTheme = React.useMemo(() => generateTheme(theme), [theme]);

  const fontBaseBody = React.useMemo(
    () =>
      !disabledFontBase &&
      `
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');

        body {
          font-family: ${defaultThemeVariables.fontFamily};
          font-size: ${defaultThemeVariables.textSize('default')}px;
        }
      `,
    [disabledFontBase]
  );

  const styleContent = React.useMemo(
    () => ({
      __html: `
        form {
          width: 100%;
        }

        .houston-icon {
          line-height: 0;
        }

        ${fontBaseBody}
      `
    }),
    [fontBaseBody]
  );

  React.useEffect(() => _setCurrentTheme(muiTheme), [muiTheme]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <style dangerouslySetInnerHTML={styleContent} />

        <ContextTheme.Provider value={muiTheme}>
          {!disableToast && <ToastContainer />}
          {!disableCssBaseline && <CssBaseline />}
          {children}
        </ContextTheme.Provider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
