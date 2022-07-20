import { Palette } from '@mui/material';

import { HoustonThemeProps } from '@eduzz/houston-styles';

export default function palette(theme: HoustonThemeProps): Partial<Palette> {
  return {
    background: {
      paper: '#fff',
      default: '#F9FAFB'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
    error: {
      light: theme.feedbackColor.negative.light,
      main: theme.feedbackColor.negative.pure,
      dark: theme.feedbackColor.negative.dark,
      contrastText: '#fff'
    },
    grey: {
      50: theme.neutralColor.high.pure,
      100: theme.neutralColor.high.pure,
      200: theme.neutralColor.high.light,
      300: theme.neutralColor.high.medium,
      400: theme.neutralColor.high.dark,
      500: theme.neutralColor.low.light,
      600: theme.neutralColor.low.medium,
      700: theme.neutralColor.low.medium,
      800: theme.neutralColor.low.dark,
      900: theme.neutralColor.low.pure,
      A100: theme.neutralColor.low.pure,
      A200: theme.neutralColor.low.pure,
      A400: theme.neutralColor.low.pure,
      A700: theme.neutralColor.low.pure
    },
    warning: {
      light: theme.feedbackColor.warning.light,
      main: theme.feedbackColor.warning.pure,
      dark: theme.feedbackColor.warning.dark,
      contrastText: '#37474F'
    },
    primary: {
      light: theme.brandColor.primary.light,
      main: theme.brandColor.primary.pure,
      dark: theme.brandColor.primary.dark,
      contrastText: '#fff'
    },
    secondary: {
      light: '#ECEFF1',
      main: '#78909C',
      dark: '#37474F',
      contrastText: '#fff'
    },
    info: {
      light: theme.feedbackColor.informative.light,
      main: theme.feedbackColor.informative.pure,
      dark: theme.feedbackColor.informative.dark,
      contrastText: '#fff'
    },
    success: {
      light: theme.feedbackColor.positive.light,
      main: theme.feedbackColor.positive.pure,
      dark: theme.feedbackColor.positive.dark,
      contrastText: '#fff'
    },
    text: {
      disabled: '#B0BEC5',
      primary: '#37474F',
      secondary: '#102027'
    }
  };
}
