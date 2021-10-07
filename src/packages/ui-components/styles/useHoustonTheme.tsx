import { useTheme } from '@mui/material';

import { IHoustonTheme } from './types';

export type IHoustonThemeCustomVariables = {
  [key: string]: unknown;
};

export default function useHoustonTheme(): IHoustonTheme {
  const theme = useTheme();

  return {
    ...theme.houston,
    breakpoints: theme.breakpoints
  };
}
