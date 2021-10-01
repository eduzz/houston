/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from '@mui/material/styles';

import components from './components';
import typography from './typography';
import defaultThemeVariables, { HoustonThemeColors } from './variables';

export default function generateTheme(customPalette?: Partial<HoustonThemeColors>) {
  const palette = { ...defaultThemeVariables.colors, ...customPalette };

  return createTheme({
    palette,
    components: components(palette),
    houston: {
      ...defaultThemeVariables,
      colors: palette
    },
    typography,
    spacing: (factor: number) => {
      return defaultThemeVariables.spacing(factor);
    }
  });
}
