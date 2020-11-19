import './assets/global.css';

import React, { memo } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import Pages from 'components/Pages';

const App = memo(() => {
  return (
    <ThemeProvider application='orbita'>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  );
});

export default App;
