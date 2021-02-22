import './assets/global.css';

import React, { memo } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import ThemeProvider, { IThemePalette } from '@eduzz/houston-ui/ThemeProvider';

import Pages from 'components/Pages';

const palette: IThemePalette = {};

const App = memo(() => {
  return (
    <ThemeProvider palette={palette}>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  );
});

export default App;
