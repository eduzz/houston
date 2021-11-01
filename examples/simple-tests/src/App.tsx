import React from 'react';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

interface IProps {
  foo?: string;
}

function App({ foo }: IProps) {
  return <ThemeProvider><div>{foo}</div></ThemeProvider>;
}

export default App;
