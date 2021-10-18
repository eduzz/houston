/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from '@mui/material/styles';

import { HoustonThemeBuilder, IHoustonTheme } from '../../types';
import components from './components';
import typography from './typography';
import defaultThemeVariables from './variables';

export default function generateTheme(customTheme?: HoustonThemeBuilder) {
  const palette = { ...defaultThemeVariables.colors, ...(customTheme?.colors ?? {}) };

  return createTheme({
    palette,
    components: components(palette),
    houston: {
      ...defaultThemeVariables,
      variables: customTheme?.variables,
      breakpoints: null,
      colors: palette
    } as IHoustonTheme,
    typography,
    spacing: (factor: number) => {
      return defaultThemeVariables.spacing(factor);
    }
  });
}
