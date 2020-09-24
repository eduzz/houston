import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import themeDefault from '../_default';

export default createMuiTheme({
  ...themeDefault,

  palette: {
    primary: {
      light: '#265AAB',
      main: '#0D47A1',
      dark: '#072D83',
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
    }
  }
});
