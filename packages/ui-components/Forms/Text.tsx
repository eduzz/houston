/* eslint-disable no-restricted-imports */
import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import TextFieldMUI, { TextFieldProps } from '@material-ui/core/TextField';

import IFormAdapter from '@eduzz/houston-core/formAdapter';
import IFormMask from '@eduzz/houston-core/maskAdapter';

import useMask from '../hooks/useMask';
import WrapperTheme from '../ThemeProvider/WrapperTheme';
import { FormFieldsContext } from './Form';

type FieldTextPropsExtends =
  | 'id'
  | 'label'
  | 'name'
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
  form?: IFormAdapter<any>;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
}

const TextField = React.forwardRef<React.LegacyRef<HTMLInputElement>, ITextFieldProps>(
  (
    { form: formProps, mask, value, name, loading, onChange, errorMessage: errorMessageProp, fullWidth, ...props },
    ref
  ) => {
    const formContext = React.useContext(FormFieldsContext);
    const form = formProps ?? formContext;

    if (!name && form) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

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
          disabled={form?.isSubmitting || props.disabled}
          helperText={errorMessage ?? props.helperText}
          name={name}
          margin='normal'
          variant='outlined'
          value={maskedValue ?? ''}
          inputRef={ref}
          onChange={handleChange}
          fullWidth={fullWidth ?? true}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
        />
      </WrapperTheme>
    );
  }
);

export default React.memo(TextField);
