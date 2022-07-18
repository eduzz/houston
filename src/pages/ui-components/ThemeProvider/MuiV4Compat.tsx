import * as React from 'react';

// @ts-ignore
import createGenerateClassName from '@material-ui/styles/createGenerateClassName';
// @ts-ignore
import StylesProvider from '@material-ui/styles/StylesProvider';

import ThemeProvider, { ThemeProviderProps } from '.';

const generateClassName = createGenerateClassName({ disableGlobal: true });

interface MuiV4Props extends ThemeProviderProps {}

const MuiV4Compat = React.memo(({ children, ...props }: MuiV4Props) => {
  return (
    <ThemeProvider {...props}>
      <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>
    </ThemeProvider>
  );
});

export default MuiV4Compat;
