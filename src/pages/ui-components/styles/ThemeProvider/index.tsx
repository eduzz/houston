import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import ToastContainer from '../../Toast/Container';
import { HoustonThemeBuilder } from '../types';
import generateTheme from './_generator';
import defaultThemeVariables from './_generator/variables';
import { setCurrentTheme } from './_state';

type IThemeExtends = 'children';

export interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
  theme?: Partial<HoustonThemeBuilder>;
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

  React.useEffect(() => setCurrentTheme(muiTheme), [muiTheme]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <style dangerouslySetInnerHTML={styleContent} />

        {!disableToast && <ToastContainer />}
        {!disableCssBaseline && <CssBaseline />}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
