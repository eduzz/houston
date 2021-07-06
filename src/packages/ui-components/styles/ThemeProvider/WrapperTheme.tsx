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

const withHoustonTheme =
  <P extends unknown>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    return (
      <WrapperTheme>
        <Component {...props} />
      </WrapperTheme>
    );
  };

export default withHoustonTheme;
