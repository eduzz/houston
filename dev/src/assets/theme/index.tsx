import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import { ThemesTypes } from './context';
import overrides from './overrides';
import props from './props';
import variables from './variables';

const themes: { [key in ThemesTypes]: ReturnType<typeof createMuiTheme> } = {
  light: createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#3a5885',
        main: '#002f58',
        dark: '#00042f',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ffff53',
        main: '#ffcc09',
        dark: '#c79c00',
        contrastText: '#fff'
      }
    },
    overrides,
    variables,
    props
  }),
  dark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#ffff53',
        main: '#ffcc09',
        dark: '#c79c00',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ffff53',
        main: '#ffcc09',
        dark: '#c79c00',
        contrastText: '#fff'
      }
    },
    overrides,
    variables,
    props
  })
};

export default themes;
