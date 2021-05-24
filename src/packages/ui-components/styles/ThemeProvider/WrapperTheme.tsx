import * as React from 'react';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import HoustonThemeContext from './context';

interface IProps {
  children?: React.ReactNode;
}

const WrapperTheme = React.memo<IProps>(({ children }) => {
  const context = React.useContext(HoustonThemeContext);
  return <ThemeProvider theme={context}>{children}</ThemeProvider>;
});

export default WrapperTheme;
