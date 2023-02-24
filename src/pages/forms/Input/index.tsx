import * as React from 'react';

import { Input as AntdInput, InputProps as AntdInputProps, InputRef } from 'antd';

import withForm, { WithFormProps } from '../Form/withForm';
import useMask, { BuildInMasks, MaskAdapter } from '../masks';

export interface InputProps
  extends Omit<AntdInputProps, 'onChange' | 'onBlur' | 'onPressEnter'>,
    WithFormProps<InputRef> {
  password?: boolean;
  mask?: BuildInMasks | MaskAdapter;
  onChange?: (value: string | number | null | undefined, event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (value: string | number | null | undefined, event: React.FocusEvent<HTMLInputElement>) => any;
  onPressEnter?: (value: string | number | null | undefined) => any;
}

const Input = React.forwardRef<InputRef, InputProps>(
  ({ mask, value, onChange, onBlur, onPressEnter, password, ...props }, ref) => {
    const { maskClean, maskedValue } = useMask(mask, value);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanValue = maskClean(e.currentTarget.value);
        onChange && onChange(cleanValue === '' ? null : cleanValue, e);
      },
      [maskClean, onChange]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
      },
      [onBlur, maskClean]
    );

    const handlePressEnter = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key === 'Enter' && onPressEnter) {
          e.preventDefault();
          onPressEnter(maskClean(target.value));
        }
      },
      [onPressEnter, maskClean]
    );

    return React.createElement(password ? AntdInput.Password : AntdInput, {
      ref,
      value: maskedValue,
      onChange: handleChange,
      onBlur: handleBlur,
      onPressEnter: handlePressEnter,
      prefix: mask === 'money' ? 'R$' : undefined,
      ...props
    });
  }
);

export default withForm(Input);
