/* eslint-disable @typescript-eslint/naming-convention */
import createPalette, { Palette } from '@material-ui/core/styles/createPalette';
import createTheme from '@material-ui/core/styles/createTheme';

import overrides from './overrides';
import props from './props';
import typography from './typography';
import defaultThemeVariables from './variables';
import themeVariable from './variables';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    houston?: typeof defaultThemeVariables & { colors: Palette };
  }

  interface ThemeOptions {
    houston?: typeof defaultThemeVariables & { colors: Palette };
  }
}

export default function generateTheme(customPalette?: Partial<typeof themeVariable.colors>) {
  const palette = createPalette({ ...themeVariable.colors, ...customPalette });

  return createTheme({
    palette,
    overrides: overrides(palette),
    props,
    houston: {
      ...defaultThemeVariables,
      colors: palette
    },
    typography,
    spacing: (factor: number) => {
      return themeVariable.spacing(factor);
    }
  });
}
