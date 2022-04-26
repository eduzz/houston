import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

import ComponentDev from './components';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ComponentDev />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
