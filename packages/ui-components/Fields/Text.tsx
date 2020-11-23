/* eslint-disable no-restricted-imports */
import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import TextFieldMUI, { TextFieldProps } from '@material-ui/core/TextField';

import useMask from '../hooks/useMask';
import WrapperTheme from '../ThemeProvider/WrapperTheme';
import { IFormAdapter, IFormMask } from './adapters';

type FieldTextPropsExtends =
  | 'id'
  | 'name'
  | 'label'
  | 'disabled'
  | 'placeholder'
  | 'type'
  | 'fullWidth'
  | 'helperText'
  | 'multiline'
  | 'value';

export interface ITextFieldProps extends Pick<TextFieldProps, FieldTextPropsExtends> {
  loading?: boolean;
  errorMessage?: string;
  mask?: IFormMask;
  form?: IFormAdapter;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
}

const TextField = React.memo<ITextFieldProps>(
  ({ form, mask, value, name, loading, onChange, errorMessage: errorMessageProp, ...props }) => {
    value = form && name ? form.getFieldValue(name) : value;
    const { maskClean, maskedValue } = useMask(mask, value);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(maskClean(e.currentTarget.value), e);
        form && form.setFieldValue(name, maskClean(e.currentTarget.value));
      },
      [onChange, maskClean, form, name]
    );

    const inputLabelProps = React.useMemo<InputLabelProps>(
      () => ({
        ...(props.placeholder ? { shrink: true } : {})
      }),
      [props.placeholder]
    );

    const inputProps = React.useMemo(
      () => ({
        endAdornment: !loading ? null : (
          <InputAdornment position='end'>
            <CircularProgress color='secondary' size={20} />
          </InputAdornment>
        )
      }),
      [loading]
    );

    const errorMessage = errorMessageProp ?? form?.getFieldError(name);
    const hasError = !!errorMessage;

    return (
      <WrapperTheme>
        <TextFieldMUI
          error={hasError}
          {...props}
          disabled={form?.isSubmitting() || props.disabled}
          helperText={errorMessage ?? props.helperText}
          name={name}
          margin='normal'
          variant='outlined'
          value={maskedValue ?? ''}
          onChange={handleChange}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
        />
      </WrapperTheme>
    );
  }
);

export default TextField;
