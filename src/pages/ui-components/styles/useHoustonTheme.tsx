import useTheme from '@mui/material/styles/useTheme';

import { IHoustonTheme } from './types';

export default function useHoustonTheme(): IHoustonTheme {
  return useTheme();
}
