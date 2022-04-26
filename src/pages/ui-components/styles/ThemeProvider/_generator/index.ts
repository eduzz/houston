import { createTheme, Palette } from '@mui/material/styles';

import { HoustonTokens } from '@eduzz/houston-tokens';

import components from './components';
import typography from './typography';
import defaultThemeVariables from './variables';

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

export default function generateTheme(tokens?: HoustonTokens) {
  const palette: Partial<Palette> = {
    background: {
      paper: '#fff',
      default: '#F9FAFB'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
    error: {
      light: tokens.feedbackColor.negative.light,
      main: tokens.feedbackColor.negative.pure,
      dark: tokens.feedbackColor.negative.dark,
      contrastText: '#fff'
    },
    grey: {
      50: tokens.neutralColor.high.pure,
      100: tokens.neutralColor.high.pure,
      200: tokens.neutralColor.high.light,
      300: tokens.neutralColor.high.medium,
      400: tokens.neutralColor.high.dark,
      500: tokens.neutralColor.high.dark,
      600: tokens.neutralColor.low.light,
      700: tokens.neutralColor.low.medium,
      800: tokens.neutralColor.low.dark,
      900: tokens.neutralColor.low.pure,
      A100: tokens.neutralColor.low.pure,
      A200: tokens.neutralColor.low.pure,
      A400: tokens.neutralColor.low.pure,
      A700: tokens.neutralColor.low.pure
    },
    warning: {
      light: tokens.feedbackColor.warning.light,
      main: tokens.feedbackColor.warning.pure,
      dark: tokens.feedbackColor.warning.dark,
      contrastText: '#37474F'
    },
    primary: {
      light: tokens.brandColor.primary.light,
      main: tokens.brandColor.primary.pure,
      dark: tokens.brandColor.primary.dark,
      contrastText: '#fff'
    },
    secondary: {
      light: '#ECEFF1',
      main: '#78909C',
      dark: '#37474F',
      contrastText: '#fff'
    },
    info: {
      light: tokens.feedbackColor.informative.light,
      main: tokens.feedbackColor.informative.pure,
      dark: tokens.feedbackColor.informative.dark,
      contrastText: '#fff'
    },
    success: {
      light: tokens.feedbackColor.positive.light,
      main: tokens.feedbackColor.positive.pure,
      dark: tokens.feedbackColor.positive.dark,
      contrastText: '#fff'
    },
    text: {
      disabled: '#B0BEC5',
      primary: '#37474F',
      secondary: '#102027'
    }
  };

  const muiTheme = createTheme({
    palette,
    components: components(palette),
    breakpoints: {
      values: Object.keys(tokens.breakpoints).reduce((acc, key) => {
        if (['up', 'down'].includes(key)) return acc;
        return { ...acc, [key]: Number(tokens.breakpoints[key].replace('px', '')) };
      }, {})
    },
    typography,
    ...(defaultThemeVariables as any),
    colors: palette
  });

  Object.keys(tokens).forEach(key => {
    if (!muiTheme[key]) {
      muiTheme[key] = tokens[key];
      return;
    }

    Object.keys(tokens[key]).forEach(childKey => {
      if (key === 'breakpoints' && ['up', 'down'].includes(childKey)) return;
      muiTheme[key][childKey] = tokens[key][childKey];
    });
  });

  return muiTheme;
}
