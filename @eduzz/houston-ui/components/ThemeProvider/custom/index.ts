import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import themeDefault from '../_default';

export default function generateCustom(palette: PaletteOptions) {
  return createMuiTheme({
    ...themeDefault,
    palette
  });
}
