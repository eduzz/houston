import generateTheme from '../_default';

export default function generateCustom(palette: Parameters<typeof generateTheme>[0]) {
  return generateTheme(palette);
}
