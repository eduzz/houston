import { PxToRem } from '../types';

export const pxToRem: PxToRem = (value: number, rate = 16): string => {
  return `${value / rate}rem`;
};
