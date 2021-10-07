import * as React from 'react';

import { ThemeProviderProps } from '@emotion/react/types/theming';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { _setCurrentTheme } from '../../Toast';
import ToastContainer from '../../Toast/Container';
import defaultThemeVariables, { HoustonThemeColors } from './_default/variables';
import ContextTheme from './context';
import generateCustomTheme from './custom';
import MuiV4Compat from './MuiV4Compat';

type IThemeExtends = 'children';

interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
  /**
   * Custom pallete colors (MUI)
   */
  palette?: Partial<HoustonThemeColors>;
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
  muiV4Compat?: boolean;
}

function ThemeProvider(props: IThemeProviderProps) {
  const { children, palette, disableCssBaseline, disabledFontBase, muiV4Compat } = props;

  const theme: Theme = React.useMemo(() => generateCustomTheme(palette), [palette]);
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

  React.useEffect(() => _setCurrentTheme(theme), [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <MuiV4Compat enabled={muiV4Compat}>
          <style dangerouslySetInnerHTML={styleContent} />

          <ContextTheme.Provider value={theme}>
            <ToastContainer />
            {!disableCssBaseline && <CssBaseline />}
            {children}
          </ContextTheme.Provider>
        </MuiV4Compat>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default React.memo(ThemeProvider);
