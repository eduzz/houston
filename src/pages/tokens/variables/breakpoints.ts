import type { Breakpoints, BreakpointsUtils } from '../types';

const DEFAULT_DISTANCE_BETWEEN_BREAKPOINTS = 5;

/**
 * @deprecated
 */
export const breakpoints: Breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xlg: '1400px'
};

const formatBreakpointValue = (value: string) => {
  return Number(value.replace('px', ''));
};

/**
 * @deprecated
 */
export const breakpoinstUtils: BreakpointsUtils = {
  down: (key: keyof Breakpoints) => `@media (max-width:${formatBreakpointValue(breakpoints[key])}px)`,
  up: (key: keyof Breakpoints) =>
    `@media (min-width:${formatBreakpointValue(breakpoints[key]) - DEFAULT_DISTANCE_BETWEEN_BREAKPOINTS / 100}px)`
};
