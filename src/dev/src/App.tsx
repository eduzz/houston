import React from 'react';

import ThemeProvider, { IHoustonPalette } from '@eduzz/houston-ui/styles/ThemeProvider';

import ComponentDev from './components';

function App() {
  const theme: Partial<IHoustonPalette> = {
    // mode
    type: 'dark',
    // custom
    variables: {
      foo: true,
      bar: false
    }
  };

  return (
    <ThemeProvider palette={theme}>
      <ComponentDev />
    </ThemeProvider>
  );
}

export default App;
