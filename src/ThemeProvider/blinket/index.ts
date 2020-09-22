import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeDefault from '../_default';

export default createMuiTheme({
  ...themeDefault,

  palette: {
    primary: {
      light: '#DC3270',
      main: '#D81B60',
      dark: '#BE0830',
      contrastText: '#fff'
    },
    secondary: {
      light: '#65f89b',
      main: '#20c46c',
      dark: '#00923f',
      contrastText: '#fff'
    },
    background: {
      default: '#f8f8f8',
      paper: '#fff'
    },
    text: {
      primary: '#192542',
      secondary: '#818b9d'
    },
    grey: {
      300: '#B0BEC5',
      400: '#78909C',
      500: '#546E7A',
      600: '#37474F'
    },
    warning: {
      main: '#FFCA28',
      dark: '#FFCA28'
    }
  }
});
