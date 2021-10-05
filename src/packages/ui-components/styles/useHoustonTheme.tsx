import * as React from 'react';

import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';
import { Palette } from '@material-ui/core/styles/createPalette';

import defaultThemeVariables, { FontSizes, FontWeight, LineHeights } from './ThemeProvider/_default/variables';
import HoustonThemeContext from './ThemeProvider/context';

export type IHoustonCustomVariables = { [key: string]: any };

export interface IHoustonTheme {
  fontFamily: string;
  radius: (unit?: number) => number;
  spacing: (unit?: number) => number;
  textSize: (size?: FontSizes) => number;
  lineHeight: (size?: LineHeights) => number;
  fontWeight: (size?: FontWeight) => number;
  breakpoints?: BreakpointsOptions;
  colors: Partial<Palette>;
}

export default function useHoustonTheme(): IHoustonTheme & { variables?: IHoustonCustomVariables } {
  const context = React.useContext(HoustonThemeContext);

  return {
    ...defaultThemeVariables,
    colors: context.palette,
    variables: context.variables
  };
}
