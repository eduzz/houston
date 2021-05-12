import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import TextField, { ITextFieldProps } from '../Text';

type FieldTextPropsOmit = 'type' | 'multiline' | 'loading' | 'mask' | 'fieldEndAdornment';

export interface IPasswordFieldProps extends Omit<ITextFieldProps, FieldTextPropsOmit> {}

const PasswordField = React.memo<IPasswordFieldProps>(props => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = React.useCallback(() => setShowPassword(showPassword => !showPassword), []);

  const fieldEndAdornment = (
    <IconButton aria-label='toggle password visibility' onClick={handleShowPassword}>
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  );

  return <TextField {...props} type={showPassword ? 'text' : 'password'} endAdornment={fieldEndAdornment} />;
});

export default PasswordField;
