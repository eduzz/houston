import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import generateTheme from '../_default';

export default function generateCustom(palette: PaletteOptions) {
  return generateTheme(palette);
}
