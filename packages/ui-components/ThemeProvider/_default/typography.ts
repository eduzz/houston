import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import themeVariable from './variables';

const typography: TypographyOptions = {
  fontFamily: ['Open Sans', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  fontSize: themeVariable.textSize(),
  button: {
    fontWeight: 600
  }
};

export default typography;
