import { useTheme } from '@emotion/react';

import { HoustonTokens } from '@eduzz/houston-tokens';

export default function useHoustonTheme(): HoustonTokens {
  return useTheme();
}
