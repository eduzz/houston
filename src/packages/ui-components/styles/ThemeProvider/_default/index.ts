/* eslint-disable @typescript-eslint/naming-convention */
import createPalette, { Palette } from '@material-ui/core/styles/createPalette';
import createTheme from '@material-ui/core/styles/createTheme';

import overrides from './overrides';
import props from './props';
import typography from './typography';
import defaultThemeVariables from './variables';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    houston?: typeof defaultThemeVariables & { colors: Palette };
  }

  interface ThemeOptions {
    houston?: typeof defaultThemeVariables & { colors: Palette };
  }
}

export default function generateTheme(customPalette?: Partial<typeof defaultThemeVariables.colors>) {
  const palette = createPalette({ ...defaultThemeVariables.colors, ...customPalette });

  const theme = createTheme({
    palette,
    overrides: overrides(palette),
    props,
    houston: {
      ...defaultThemeVariables,
      colors: palette
    },
    typography,
    spacing: (factor: number) => {
      return defaultThemeVariables.spacing(factor);
    }
  });

  return theme;
}
