import './assets/global.css';
import './yupLocale';

import React, { memo, useMemo, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import themes from 'assets/theme';
import ThemeContext, { IThemeContext, ThemesTypes } from 'assets/theme/context';
import Dialogs from 'components/Dialogs';
import Pages from 'components/Pages';
import Alert from 'components/Shared/Alert';
import Loader from 'components/Shared/Loader';
import Toast from 'components/Shared/Toast';

const App = memo(() => {
  const [currentTheme, setCurrentTheme] = useState<ThemesTypes>(
    (localStorage.getItem('app-theme') ?? 'light') as ThemesTypes
  );

  const themeContext = useMemo<IThemeContext>(() => {
    return {
      currentTheme,
      toogleTheme: () => {
        const newTheme: ThemesTypes = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('app-theme', newTheme);
        setCurrentTheme(newTheme);
      }
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      <MuiThemeProvider theme={themes[themeContext.currentTheme]}>
        <CssBaseline />
        <Dialogs />

        <Loader />

        <Alert.Global />
        <Toast.Global />

        <Pages />
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
});

export default App;
