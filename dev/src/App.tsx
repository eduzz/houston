import { memo } from 'react';

import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import Routes from './routes';

const App = memo(() => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
});

export default App;
