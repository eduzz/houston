import generateTheme from '../_default';
import { HoustonThemeColors } from '../_default/variables';

export default function generateCustom(palette: Partial<HoustonThemeColors>) {
  return generateTheme(palette);
}
