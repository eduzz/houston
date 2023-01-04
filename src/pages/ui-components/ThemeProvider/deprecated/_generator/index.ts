//@ts-ignore
import { Palette } from '@mui/material';
//@ts-ignore
import { createTheme } from '@mui/material/styles';

import { HoustonThemeProps } from '@eduzz/houston-styles';

import createThemeNew from '../../compat/createTheme';
import components from './components';
import palette from './palette';
import typography from './typography';

//@ts-ignore
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xlg: true;
  }
}

export default function generateTheme(theme: HoustonThemeProps) {
  const newPalette = palette(theme);

  const muiTheme = createTheme({
    palette: newPalette,
    components: components(newPalette as Palette, theme),
    typography: typography(theme),
    spacing: theme.spacing.fn,
    breakpoints: {
      values: Object.keys(theme.breakpoints).reduce((acc, key) => {
        if (['up', 'down'].includes(key)) return acc;
        return { ...acc, [key]: Number(theme.breakpoints[key].replace('px', '')) };
      }, {}) as any
    }
  });

  const newTheme = createThemeNew(theme.brandColor);
  theme = {
    ...newTheme,
    ...theme
  };

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
