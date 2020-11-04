import * as React from 'react';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { useTheme } from './context';

interface IWrapperThemeProps {
  children?: React.ReactNode;
}

const WrapperTheme = React.memo<IWrapperThemeProps>(({ children }) => {
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

export default WrapperTheme;
