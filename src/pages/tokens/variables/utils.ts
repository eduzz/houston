export function pxToRem(value: number, rate = 16) {
  return `${value / rate}rem`;
}

export function remToPx(value: number, rate = 16) {
  return `${value * rate}px`;
}

export function decimalToHexadecimal(value: string) {
  return parseInt(value, 16);
}

export function hexToRgba(hexColor: string, opacity = 1) {
  const twoLettersRegex = /\w\w/g;
  const [r, g, b] = hexColor.match(twoLettersRegex).map(decimalToHexadecimal);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
