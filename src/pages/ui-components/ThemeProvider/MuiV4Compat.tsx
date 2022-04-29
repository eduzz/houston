import * as React from 'react';

// @ts-ignore
import createGenerateClassName from '@material-ui/styles/createGenerateClassName';
// @ts-ignore
import StylesProvider from '@material-ui/styles/StylesProvider';

import ThemeProvider, { IThemeProviderProps } from '.';

const generateClassName = createGenerateClassName({ disableGlobal: true });

interface IProps extends IThemeProviderProps {}

const MuiV4Compat: React.FC<IProps> = React.memo(({ children, ...props }) => {
  return (
    <ThemeProvider {...props}>
      <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>
    </ThemeProvider>
  );
});

export default MuiV4Compat;
