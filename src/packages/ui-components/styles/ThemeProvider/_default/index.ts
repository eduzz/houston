/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme, Theme } from '@mui/material/styles';

import components from './components';
import typography from './typography';
import defaultThemeVariables, { HoustonThemeColors } from './variables';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    houston?: typeof defaultThemeVariables & { colors: HoustonThemeColors };
  }

  interface ThemeOptions {
    houston?: typeof defaultThemeVariables & { colors: HoustonThemeColors };
  }
}

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

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
