import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProviderProps } from '@material-ui/core/styles';

import { _setCurrentTheme } from '../../Toast';
import ToastContainer from '../../Toast/Container';
import { IHoustonThemeCustomVariables, IHoustonTheme } from '../useHoustonTheme';
import generateTheme from './_default';
import defaultThemeVariables from './_default/variables';
import ContextTheme from './context';

export type IHoustonPalette = IHoustonTheme['colors'] & { variables?: IHoustonThemeCustomVariables };

type IThemeExtends = 'children';

interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
  /**
   * Custom pallete colors (MUI)
   */
  palette?: Partial<IHoustonPalette>;
  disableCssBaseline?: boolean;
  disabledFontBase?: boolean;
}

function ThemeProvider({ children, palette, disableCssBaseline, disabledFontBase }: IThemeProviderProps) {
  const theme: Theme = React.useMemo(() => generateTheme(palette), [palette]);

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
    <React.Fragment>
      <style dangerouslySetInnerHTML={styleContent} />

      <ContextTheme.Provider value={theme}>
        <ToastContainer />
        {!disableCssBaseline && <CssBaseline />}
        {children}
      </ContextTheme.Provider>
    </React.Fragment>
  );
}

export default React.memo(ThemeProvider);
