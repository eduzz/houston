import { useTheme } from '@mui/material/styles';

import { IHoustonTheme } from './types';

export default function useHoustonTheme(): IHoustonTheme {
  return useTheme();
}
