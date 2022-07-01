import type { Spacing } from '../types';

function spacingFn(mult: number) {
  return `${mult * 0.25}rem`;
}

export const spacing: Spacing = {
  fn: spacingFn,
  quarck: '0.25rem',
  nano: '0.5rem',
  xxxs: '1rem',
  xxs: '1.5rem',
  xs: '2rem',
  sm: '2.5rem',
  md: '3rem',
  lg: '3.5rem',
  xl: '4rem',
  xxl: '5rem',
  xxxl: '7.5rem',
  huge: '10rem',
  giant: '12.5rem',
  inline: {
    quarck: '0.25rem',
    nano: '0.5rem',
    xxxs: '1rem',
    xxs: '1.5rem',
    xs: '2rem',
    sm: '2.5rem',
    md: '3rem',
    lg: '3.5rem',
    xl: '4rem',
    xxl: '5rem',
    xxxl: '7.5rem',
    huge: '10rem',
    giant: '12.5rem'
  },
  inset: {
    xxxs: '0.25rem',
    xxs: '0.5rem',
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '3rem'
  },
  stack: {
    quarck: '0.25rem',
    nano: '0.5rem',
    xxxs: '1rem',
    xxs: '1.5rem',
    xs: '2rem',
    sm: '2.5rem',
    md: '3rem',
    lg: '3.5rem',
    xl: '4rem',
    xxl: '5rem',
    xxxl: '7.5rem',
    huge: '10rem',
    giant: '12.5rem'
  },
  squish: {
    xxs: '0.5rem 1rem 0.5rem 1rem',
    xs: '1rem 1.5rem 1rem 1.5rem',
    sm: '1rem 2rem 1rem 2rem'
  }
};
