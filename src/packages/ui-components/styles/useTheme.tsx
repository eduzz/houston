import * as React from 'react';

import defaultThemeVariables from './ThemeProvider/_default/variables';
import HoustonThemeContext from './ThemeProvider/context';

export type HoustonTheme = typeof defaultThemeVariables;

export default function useTheme() {
  const context = React.useContext(HoustonThemeContext);

  return {
    ...defaultThemeVariables,
    colors: context.palette
  };
}
