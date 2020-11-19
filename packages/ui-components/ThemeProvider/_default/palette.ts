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
  grey: {
    300: '#B0BEC5',
    400: '#78909C',
    500: '#546E7A',
    600: '#37474F'
  },
  warning: {
    main: '#FFCA28',
    dark: '#FFCA28'
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f'
  },
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2'
  },
  text: {
    primary: '#546E7A'
  }
};

export default palette;
