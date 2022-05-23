import { createTheme } from '@mui/material/styles';

import { IHoustonTheme } from '@eduzz/houston-styles';

import components from './components';
import palette from './palette';
import typography from './typography';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xlg: true;
  }
}

export default function generateTheme(theme?: IHoustonTheme) {
  const newPalette = palette(theme);

  const muiTheme = createTheme({
    palette: newPalette,
    components: components(newPalette, theme),
    typography: typography(theme),
    spacing: theme.spacing.fn,
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
