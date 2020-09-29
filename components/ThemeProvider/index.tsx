import * as React from 'react';

import { Theme, ThemeProviderProps } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

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

  if (loading) return null;

  return <ContextTheme value={theme}>{children}</ContextTheme>;
}

export default ThemeProvider;
