import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';
import { HoustonThemeBuilder } from '@eduzz/houston-ui/styles/types';

import ComponentDev from './components';

function App() {
  const theme = {} as HoustonThemeBuilder;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ComponentDev />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
