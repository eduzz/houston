import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';
import { HoustonThemeBuilder } from '@eduzz/houston-ui/styles/types';

import ComponentDev from './components';

function App() {
  const customVariables = { background: 'pink' };

  const theme = {
    variables: {
      lang: 'pt-BR',
      ...customVariables
    }
  } as Partial<HoustonThemeBuilder>;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ComponentDev />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
