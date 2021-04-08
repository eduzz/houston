import * as React from 'react';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { useTheme } from './context';

interface IProps {
  children?: React.ReactNode;
}

const WrapperTheme = React.memo<IProps>(({ children }) => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

export default WrapperTheme;
