import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import overrides from './overrides';
import palette from './palette';
import props from './props';
import typography from './typography';

export default createMuiTheme({
  palette,
  overrides,
  props,
  typography
});
