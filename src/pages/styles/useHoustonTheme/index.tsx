import { useTheme } from '@emotion/react';

import { HoustonThemeProps } from '..';

/**
 * @deprecated Import from `@emotion/react`
 */
export default function useHoustonTheme(): HoustonThemeProps {
  return useTheme();
}
