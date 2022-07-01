import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import EyeOffOutline from '@eduzz/houston-icons/EyeOffOutline';
import EyeOnOutline from '@eduzz/houston-icons/EyeOnOutline';

import IconButton from '../../IconButton';
import Input, { IInputProps } from '../Input';

export interface IInputPasswordProps
  extends Omit<
    IInputProps<string>,
    'mask' | 'type' | 'multiline' | 'rows' | 'disableAutoResize' | 'fieldEndAdornment'
  > {}

const InputPassword: React.FC<IInputPasswordProps> = props => {
  const [showPassword, toogleShowPassword] = useBoolean(false);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <IconButton size='small' onClick={toogleShowPassword}>
          {showPassword ? <EyeOnOutline size={24} /> : <EyeOffOutline size={24} />}
        </IconButton>
      }
    />
  );
};

export default React.memo(InputPassword);
