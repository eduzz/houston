import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';

import overrides from './overrides';
import props from './props';
import typography from './typography';
import themeVariable from './variables';

export default function generateTheme(customPalette?: Partial<typeof themeVariable.colors>) {
  const palette = createPalette({ ...themeVariable.colors, ...customPalette });

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
