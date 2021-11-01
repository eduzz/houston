import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import EyeOffOutline from '@eduzz/houston-icons/EyeOffOutline';
import EyeOnOutline from '@eduzz/houston-icons/EyeOnOutline';

import ButtonIcon from '../../ButtonIcon';
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
        <ButtonIcon size='small' onClick={toogleShowPassword}>
          {showPassword ? <EyeOnOutline size={24} /> : <EyeOffOutline size={24} />}
        </ButtonIcon>
      }
    />
  );
};

export default React.memo(PasswordField);
