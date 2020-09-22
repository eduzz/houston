import React, { useEffect, useState } from 'react';
import { Theme, ThemeProvider as ThemeProviderMUI, ThemeProviderProps } from '@material-ui/core/styles';

export type IThemeProviderApplications = 'select' | 'orbita' | 'blinket';

interface IThemeProviderProps extends Partial<ThemeProviderProps> {
  /**
   * Application theme
   */
  application: IThemeProviderApplications;
}

function ThemeProvider(props: IThemeProviderProps) {
  const { children, application } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    import(`./${application}`).then(module => {
      setTheme(module.default);
      setLoading(false);
    });
  }, [application]);

  if (loading) return null;

  return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
}

export default ThemeProvider;
