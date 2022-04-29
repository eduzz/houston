import type { Spacing, SpacingFn } from '../types';

const spacingFn: SpacingFn = (mult: number) => {
  return `${mult * 0.25}rem`;
};

export const spacing: Spacing = {
  fn: spacingFn,
  quarck: '4px',
  nano: '8px',
  xxxs: '16px',
  xxs: '24px',
  xs: '32px',
  sm: '40px',
  md: '48px',
  lg: '56px',
  xl: '64px',
  xxl: '80px',
  xxxl: '120px',
  huge: '160px',
  giant: '200px',
  inset: {
    quarck: '4px',
    nano: '8px',
    xxxs: '16px',
    xxs: '24px',
    xs: '32px',
    sm: '40px',
    md: '48px',
    lg: '56px',
    xl: '64px',
    xxl: '80px',
    xxxl: '120px',
    huge: '160px',
    giant: '200px'
  },
  stack: {
    quarck: '4px',
    nano: '8px',
    xxxs: '16px',
    xxs: '24px',
    xs: '32px',
    sm: '40px',
    md: '48px',
    lg: '56px',
    xl: '64px',
    xxl: '80px',
    xxxl: '120px',
    huge: '160px',
    giant: '200px'
  },
  squish: {
    xxs: '8px 16px 8px 16px',
    xs: '16px 24px 16px 24px',
    sm: '16px 32px 16px 32px'
  }
};
