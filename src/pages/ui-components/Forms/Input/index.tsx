/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import { InputRef } from 'antd';

import FormInput from '@eduzz/houston-forms/Input';
import { MaskAdapter } from '@eduzz/houston-forms/masks';
import FormTextarea from '@eduzz/houston-forms/Textarea';

import { FieldsetProps } from '../_utils/Fieldset';
import { WithFormProps } from '../Form/withForm';

type Rows = 2 | 4 | 6 | 8 | 10 | 14 | 18 | 24;

interface OwnProperties<V = any> extends FieldsetProps {
  value?: V | null | undefined;
  mask?: MaskAdapter;
  multiline?: boolean;
  rows?: Rows;
  disableAutoResize?: boolean;
  onChange?: (value: V | null | undefined, event: React.ChangeEvent<any>) => any;
  onBlur?: (value: V | null | undefined, event: React.FocusEvent<any>) => any;
  onPressEnter?: (value: V | null | undefined) => any;
  nativeChangeEvent?: boolean;
}

export interface InputProps<V = any>
  extends OwnProperties<V>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties>,
    WithFormProps<HTMLInputElement> {}

/**
 * @deprecated Use Input from `@eduzz/houston-forms` or AntD
 */
const Input = React.forwardRef<InputRef, InputProps>(
  (
    {
      loading,
      errorMessage,
      fullWidth,
      endAdornment,
      startAdornment,
      multiline,
      size,
      rows = 4,
      disableAutoResize,
      helperText,
      nativeChangeEvent,
      type,
      ...props
    },
    ref
  ) => {
    return multiline ? (
      <FormTextarea
        size={size === 'sm' ? 'small' : undefined}
        help={helperText}
        error={errorMessage}
        rows={rows}
        autoSize={disableAutoResize ? undefined : { minRows: rows, maxRows: 10 }}
        ref={ref}
        {...(props as any)}
      />
    ) : (
      <FormInput
        size={size === 'sm' ? 'small' : undefined}
        help={helperText}
        error={errorMessage}
        addonBefore={startAdornment}
        addonAfter={endAdornment}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
