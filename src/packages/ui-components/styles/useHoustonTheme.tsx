import { Breakpoints, useTheme } from '@mui/material';

import defaultThemeVariables from './ThemeProvider/_default/variables';

export type HoustonTheme = typeof defaultThemeVariables & { breakpoints: Breakpoints };

export default function useHoustonTheme(): HoustonTheme {
  const theme = useTheme();

  return {
    ...theme.houston,
    breakpoints: theme.breakpoints
  };
}
