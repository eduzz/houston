import './assets/global.css';

import React, { memo } from 'react';

import ThemeProvider, { IThemePalette } from '@eduzz/houston-ui/ThemeProvider';

import Pages from 'components/Pages';

const palette: IThemePalette = {};

const App = memo(() => {
  return (
    <ThemeProvider palette={palette}>
      <Pages />
    </ThemeProvider>
  );
});

export default App;
