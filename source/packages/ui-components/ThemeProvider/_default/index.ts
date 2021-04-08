import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette, { PaletteOptions } from '@material-ui/core/styles/createPalette';

import overrides from './overrides';
import defaultPalette from './palette';
import props from './props';
import typography from './typography';
import themeVariable from './variables';

export default function generateTheme(customPalette?: PaletteOptions) {
  const palette = createPalette({ ...defaultPalette, ...customPalette });

  return createMuiTheme({
    palette,
    overrides: overrides(palette),
    props,
    typography,
    spacing: (factor: number) => {
      return themeVariable.spacing(factor);
    }
  });
}
