import { PxToRem, HexToRgba } from '../types';

export const pxToRem: PxToRem = (value: number, rate = 16): string => {
  return `${value / rate}rem`;
};

export const hexToRgba: HexToRgba = (hexColor: string, opacity?: number) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  if (opacity) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};
