const PIXELS_IN_ONE_REM = 16;

export function pxToRem(value: number, rate = PIXELS_IN_ONE_REM) {
  return value / rate;
}

export function remToPx(value: number, rate = PIXELS_IN_ONE_REM) {
  return value * rate;
}

const HEXADECIMAL_BASE = 16;

export function decimalToHexadecimal(value: string) {
  return parseInt(value, HEXADECIMAL_BASE);
}

export function hexToRgba(hexColor: string, opacity = 1) {
  const twoLettersRegex = /\w\w/g;
  const [r, g, b] = hexColor.match(twoLettersRegex)?.map(decimalToHexadecimal) ?? [];

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function cleanUnit(value: string) {
  return parseFloat(value.replace(/[a-zA-Z]/g, ''));
}
