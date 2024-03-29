const HEXADECIMAL_BASE = 16;
const UNIT_BASE = 8;

const PIXELS_IN_ONE_REM = 16;

export function pxToRem(value: number, rate: number = PIXELS_IN_ONE_REM) {
  return value / rate;
}

function decimalToHexadecimal(value: string) {
  return parseInt(value, HEXADECIMAL_BASE);
}

export function spacing(unit = 1) {
  return `${UNIT_BASE * unit}px`;
}

export function hexToRgba(hexColor: string, opacity = 1) {
  const twoLettersRegex = /\w\w/g;
  const [r, g, b] = hexColor.match(twoLettersRegex)?.map(decimalToHexadecimal) ?? [];

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
