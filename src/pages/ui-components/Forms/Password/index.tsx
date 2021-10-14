import * as React from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import TextField, { ITextFieldProps } from '../Text';

type FieldTextPropsOmit = 'type' | 'multiline' | 'loading' | 'mask' | 'fieldEndAdornment';

export interface IPasswordFieldProps extends Omit<ITextFieldProps, FieldTextPropsOmit> {}

const PasswordField: React.FC<IPasswordFieldProps> = props => {
  const [showPassword, toogleShowPassword] = useBoolean(false);

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <IconButton size='small' onClick={toogleShowPassword}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      }
    />
  );
};

export default React.memo(PasswordField);
