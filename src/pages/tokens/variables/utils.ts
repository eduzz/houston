import { PxToRem } from '../types';

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
