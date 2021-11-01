import React from 'react';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';
import { HoustonThemeBuilder } from '@eduzz/houston-ui/styles/types';

import ComponentDev from './components';

function App() {
  const theme = {} as HoustonThemeBuilder;

  return (
    <ThemeProvider theme={theme}>
      <ComponentDev />
    </ThemeProvider>
  );
}

export default App;
