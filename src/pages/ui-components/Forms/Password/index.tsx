import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import EyeOffOutline from '@eduzz/houston-icons/EyeOffOutline';
import EyeOnOutline from '@eduzz/houston-icons/EyeOnOutline';

import IconButton from '../../IconButton';
import Input, { InputProps } from '../Input';

export interface InputPasswordProps
  extends Omit<
    InputProps<string>,
    'mask' | 'type' | 'multiline' | 'rows' | 'disableAutoResize' | 'fieldEndAdornment'
  > {}

const InputPassword = (props: InputPasswordProps) => {
  const [showPassword, toggleShowPassword] = useBoolean(false);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <IconButton size='small' onClick={toggleShowPassword}>
          {showPassword ? <EyeOnOutline size='md' /> : <EyeOffOutline size='md' />}
        </IconButton>
      }
    />
  );
};

export default React.memo(InputPassword);
