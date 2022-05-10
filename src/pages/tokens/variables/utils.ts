import { PxToRem } from '../types';

export const pxToRem: PxToRem = (value: number | string, rate = 16): string => {
  if (typeof value === 'string') {
    value = value.replace(/\D/g, '');
    value = value && parseInt(value);

    return `${value / rate}rem`;
  }

  return `${value / rate}rem`;
};
