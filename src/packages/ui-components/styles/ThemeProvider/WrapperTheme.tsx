import * as React from 'react';

const withHoustonTheme =
  <P extends unknown>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    return <Component {...props} />;
  };

export default withHoustonTheme;
