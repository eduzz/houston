const PIXELS_IN_ONE_REM = 16;

/**
 * @deprecated
 */
export function pxToRem(value: number, rate = PIXELS_IN_ONE_REM) {
  return value / rate;
}

/**
 * @deprecated
 */
export function remToPx(value: number, rate = PIXELS_IN_ONE_REM) {
  return value * rate;
}

const HEXADECIMAL_BASE = 16;

/**
 * @deprecated
 */
export function decimalToHexadecimal(value: string) {
  return parseInt(value, HEXADECIMAL_BASE);
}

/**
 * @deprecated
 */
export function hexToRgba(hexColor: string, opacity = 1) {
  const twoLettersRegex = /\w\w/g;
  const [r, g, b] = hexColor.match(twoLettersRegex)?.map(decimalToHexadecimal) ?? [];

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * @deprecated
 */
export function cleanUnit(value: string) {
  return parseFloat(value.replace(/[a-zA-Z]/g, ''));
}
