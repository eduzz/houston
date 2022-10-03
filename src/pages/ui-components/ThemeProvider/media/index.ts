const breakpointsDown = {
  xs: '575px',
  sm: '767px',
  md: '991px',
  lg: '1199px',
  xl: '1599px'
} as const;

const breakpointsUp = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
} as const;

export type MediaMediaDownBreakpoints = typeof breakpointsDown;
export type MediaMediaUpBreakpoints = typeof breakpointsUp;

export const mediaUtils = {
  down: (key: keyof MediaMediaDownBreakpoints) => `@media (max-width:${breakpointsDown[key]})`,
  up: (key: keyof MediaMediaUpBreakpoints) => `@media (min-width:${breakpointsUp[key]})`
};
