import { PxToRem, HexToRgba } from '../types';

export const cleanValue = (value: string) => {
  if (!/px$/g.test(value)) {
    console.warn(
      "[@eduzz/houston-tokens]: use valores em pixels (px) na função pxToRem(). Por exemplo: pxToRem('16px')"
    );

    return NaN;
  }

  value = value.replace(/\D/g, '');
  return value && parseInt(value);
};

export const pxToRem: PxToRem = (value: string, rate = 16) => {
  const cleanedValue = cleanValue(value);

  if (!cleanedValue) {
    return value;
  }

  return `${cleanedValue / rate}rem`;
};

export const hexToRgba: HexToRgba = (hexColor: string, opacity?: number) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity ?? 1})`;
};
