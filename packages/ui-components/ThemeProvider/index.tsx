import * as React from 'react';

import { Theme, ThemeProviderProps } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import { _setCurrentTheme } from '../Toast';
import ToastContainer from '../Toast/Container';
import ContextTheme from './context';
import generateCustomTheme from './custom';

export interface IThemePalette extends PaletteOptions {}

type IThemeExtends = 'children';

interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
  /**
   * Custom pallete colors (MUI)
   */
  palette?: IThemePalette;
}

function ThemeProvider(props: IThemeProviderProps) {
  const { children, palette } = props;

  const theme: Theme = React.useMemo(() => generateCustomTheme(palette), [palette]);

  const styleContent = React.useMemo(
    () => ({
      __html: `
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');
      `
    }),
    []
  );

  React.useEffect(() => _setCurrentTheme(theme), [theme]);

  return (
    <React.Fragment>
      <style dangerouslySetInnerHTML={styleContent} />

      <ContextTheme value={theme}>
        <ToastContainer />
        {children}
      </ContextTheme>
    </React.Fragment>
  );
}

export default React.memo(ThemeProvider);
