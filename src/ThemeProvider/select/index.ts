import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeDefault from '../_default';

export default createMuiTheme({
  ...themeDefault,

  palette: {
    primary: {
      light: '#75ffb7',
      main: '#30e986',
      dark: '#00b558',
      contrastText: '#222'
    },
    secondary: {
      light: '#75ffb7',
      main: '#30e986',
      dark: '#00b558',
      contrastText: '#222'
    },
    background: {
      default: '#1f222a',
      paper: '#262a33'
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#bdbdbd'
    }
  }
});
