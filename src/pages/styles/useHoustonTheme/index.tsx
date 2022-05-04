import { useTheme } from '@emotion/react';

import { IHoustonTheme } from '..';

export default function useHoustonTheme(): IHoustonTheme {
  return useTheme();
}
