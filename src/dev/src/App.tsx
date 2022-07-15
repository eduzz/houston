import './app.css';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import ComponentDev from './components';

declare module '@eduzz/houston-styles' {
  interface HoustonThemePropsCustomVariables {
    customVar: string;
    customObject: {
      prop: number;
    };
  }
}

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
