import { PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface SimplePaletteColorOptions {
    lighter?: string;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface PaletteColor {
    lighter?: string;
  }
}

const palette: PaletteOptions = {
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
    light: '#E6F5FC',
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
};

export default palette;
