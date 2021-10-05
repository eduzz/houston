import React from 'react';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

import ComponentDev from './components';

function App() {
  return (
    <ThemeProvider palette={{}}>
      <ComponentDev />
    </ThemeProvider>
  );
}

export default App;
