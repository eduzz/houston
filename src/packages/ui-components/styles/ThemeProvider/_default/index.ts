/* eslint-disable @typescript-eslint/naming-convention */
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette, { Palette } from '@material-ui/core/styles/createPalette';

import overrides from './overrides';
import props from './props';
import typography from './typography';
import defaultThemeVariables from './variables';
import themeVariable from './variables';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    houston?: typeof defaultThemeVariables & { colors: Palette };
  }

  interface ThemeOptions {
    houston?: typeof defaultThemeVariables & { colors: Palette };
  }
}

export default function generateTheme(customPalette?: Partial<typeof themeVariable.colors>) {
  const palette = createPalette({ ...themeVariable.colors, ...customPalette });

  return createMuiTheme({
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
