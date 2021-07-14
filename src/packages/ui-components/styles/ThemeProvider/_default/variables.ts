import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const fontSizes = {
  'xx-small': 10,
  'x-small': 12,
  small: 14,
  normal: 15,
  default: 16,
  medium: 20,
  large: 24,
  'x-large': 32,
  'xx-large': 40
};

const lineHeights = {
  compact: 1.2,
  normal: 1.5,
  comfortable: 1.8
};

const fontWeight = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700
};

export type FontSizes = keyof typeof fontSizes;
export type LineHeights = keyof typeof lineHeights;
export type FontWeight = keyof typeof fontWeight;

const defaultThemeVariables = {
  fontFamily: 'Open Sans, "Helvetica Neue", Arial, sans-serif',
  radius: (unit = 1) => 4 * unit,
  spacing: (unit = 4) => 4 * unit,
  textSize: (size: FontSizes = 'normal') => fontSizes[size],
  lineHeight: (size: LineHeights = 'normal') => lineHeights[size],
  fontWeight: (size: FontWeight = 'regular') => fontWeight[size],
  breakpoints: createBreakpoints({}),
  colors: {
    background: {
      paper: '#fff',
      default: '#F9FAFB'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
    error: {
      light: '#FDD9D7',
      main: '#F44336',
      dark: '#B8160A',
      contrastText: '#fff'
    },
    grey: {
      50: '#fafafa',
      100: '#F9FAFB',
      200: '#ECEFF1',
      300: '#B0BEC5',
      400: '#78909C',
      500: '#546E7A',
      600: '#37474F',
      700: '#373737',
      800: '#272727',
      900: '#1E1E1E'
    },
    warning: {
      main: '#FFCA28',
      dark: '#E5AD00',
      light: '#FFF4D4',
      contrastText: '#37474F'
    },
    primary: {
      light: '#9EB5D9',
      main: '#0D47A1',
      dark: '#072D83',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ECEFF1',
      main: '#78909C',
      dark: '#37474F',
      contrastText: '#fff'
    },
    info: {
      light: '#CDEBFA',
      main: '#039BE5',
      dark: '#0277B0',
      contrastText: '#fff'
    },
    success: {
      light: '#D2EBD3',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
      disabled: '#B0BEC5',
      hint: '#B0BEC5',
      primary: '#546E7A',
      secondary: '#78909C'
    }
  }
};

export default defaultThemeVariables;
