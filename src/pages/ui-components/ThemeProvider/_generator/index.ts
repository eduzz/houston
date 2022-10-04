import { Palette } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { HoustonTheme } from '../createTheme/types';
import components from './components';
import palette from './palette';
import typography from './typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xlg: true;
  }
}

export default function generateTheme(theme: HoustonTheme) {
  const newPalette = palette(theme);

  const muiTheme = createTheme({
    palette: newPalette,
    components: components(newPalette as Palette, theme),
    typography: typography(theme),
    spacing: theme.spacing,
    breakpoints: {
      values: Object.keys(theme.breakpoints).reduce((acc, key) => {
        if (['up', 'down'].includes(key)) return acc;
        return { ...acc, [key]: Number(theme.breakpoints[key].replace('px', '')) };
      }, {}) as any
    }
  });

  Object.keys(theme).forEach(key => {
    if (!muiTheme[key]) {
      muiTheme[key] = theme[key];
      return;
    }

    Object.keys(theme[key]).forEach(childKey => {
      if (key === 'breakpoints' && ['up', 'down'].includes(childKey)) return;
      muiTheme[key][childKey] = theme[key][childKey];
    });
  });

  return muiTheme;
}
