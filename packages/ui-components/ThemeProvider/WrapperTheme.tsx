import * as React from 'react';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { useTheme } from './context';

const WrapperTheme = React.memo(({ children }) => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

export default WrapperTheme;
