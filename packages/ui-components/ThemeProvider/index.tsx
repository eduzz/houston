import * as React from 'react';

import { Theme, ThemeProviderProps } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import { _setCurrentTheme } from '../Toast';
import ToastContainer from '../Toast/Container';
import ContextTheme from './context';
import generateCustomTheme from './custom';

export type IThemeProviderApplications = 'select' | 'orbita' | 'blinket' | 'backoffice' | 'custom';

interface IThemeProviderProps extends Partial<ThemeProviderProps> {
  /**
   * Application theme
   */
  application: IThemeProviderApplications;
  /**
   * Custom pallete colors
   */
  paletteOptions?: PaletteOptions;
}

function ThemeProvider(props: IThemeProviderProps) {
  const { children, application, paletteOptions } = props;

  const [loading, setLoading] = React.useState<boolean>(true);
  const [theme, setTheme] = React.useState<Theme>(null);

  const styleContent = React.useMemo(
    () => ({
      __html: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');"
    }),
    []
  );

  React.useEffect(() => {
    if (application === 'custom') {
      setTheme(generateCustomTheme(paletteOptions));
      setLoading(false);
      return;
    }

    import(`./${application}`).then(module => {
      setTheme(module.default);
      setLoading(false);
    });
  }, [application, paletteOptions]);

  React.useEffect(() => {
    _setCurrentTheme(theme);
  }, [theme]);

  if (loading) return null;

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

export default ThemeProvider;
