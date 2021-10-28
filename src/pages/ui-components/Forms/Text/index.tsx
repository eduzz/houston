/* eslint-disable no-restricted-imports */

import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { InputLabelProps } from '@mui/material/InputLabel';
import TextFieldMUI, { TextFieldProps } from '@mui/material/TextField';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import IFormMask from '@eduzz/houston-core/maskAdapter';

import useMask from '../../hooks/useMask';
import { FormFieldsContext } from '../Form';

type FieldTextPropsExtends =
  | 'id'
  | 'label'
  | 'name'
  | 'disabled'
  | 'placeholder'
  | 'type'
  | 'fullWidth'
  | 'required'
  | 'helperText'
  | 'multiline'
  | 'rows'
  | 'className'
  | 'onKeyPress'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'onClick'
  | 'inputRef'
  | 'InputProps'
  | 'value';

export interface ITextFieldProps extends Pick<TextFieldProps, FieldTextPropsExtends> {
  loading?: boolean;
  errorMessage?: string;
  mask?: IFormMask;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (value: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  margin?: 'none' | 'dense' | 'normal';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  onPressEnter?: (value: any) => any;
  maxLength?: number;
  size?: 'normal' | 'small';
}

const TextField = React.forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      mask,
      value,
      name,
      loading,
      onChange,
      onBlur,
      errorMessage: errorMessageProp,
      fullWidth,
      margin,
      endAdornment,
      startAdornment,
      maxLength,
      onPressEnter,
      className,
      size,
      InputProps,
      onKeyPress,
      helperText,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    if (!name && setFieldValue) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    value = formValue ?? value;

    const { maskClean, maskedValue } = useMask(mask, value);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let cleanValue = maskClean(e.currentTarget.value);

        if (maxLength) {
          cleanValue = (cleanValue as string).substring(0, maxLength);
        }

        onChange && onChange(cleanValue, e);
        setFieldValue && setFieldValue(name, cleanValue);
      },
      [onChange, maskClean, setFieldValue, name, maxLength]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
      },
      [onBlur, maskClean]
    );

    const inputLabelProps = React.useMemo<InputLabelProps>(
      () => ({
        ...(props.placeholder ? { shrink: true } : {})
      }),
      [props.placeholder]
    );

    const inputProps = React.useMemo(() => {
      let end = null;
      let start = null;

      if (endAdornment) {
        end = <InputAdornment position='end'>{endAdornment}</InputAdornment>;
      }

      if (startAdornment) {
        start = <InputAdornment position='start'>{startAdornment}</InputAdornment>;
      }

      if (loading) {
        end = (
          <InputAdornment position='end'>
            <CircularProgress color='secondary' size={20} />
          </InputAdornment>
        );
      }

      return {
        ...InputProps,
        endAdornment: end,
        startAdornment: start
      };
    }, [endAdornment, startAdornment, loading, InputProps]);

    const handlePressEnter = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key === 'Enter') {
          e.preventDefault();
          onPressEnter(maskClean(target.value));
        }
      },
      [onPressEnter, maskClean]
    );

    const errorMessage = errorMessageProp ?? formError;
    const hasError = !!errorMessage;

    return (
      <TextFieldMUI
        error={hasError}
        inputRef={ref}
        {...props}
        disabled={isSubmitting || disabled || loading}
        helperText={errorMessage || helperText}
        className={clsx(className, size === 'small' && 'input-size-small')}
        name={name}
        margin={margin ?? 'normal'}
        variant='outlined'
        value={maskedValue ?? ''}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth={fullWidth ?? true}
        InputLabelProps={inputLabelProps}
        InputProps={inputProps}
        onKeyPress={onPressEnter ? handlePressEnter : onKeyPress}
      />
    );
  }
);

export default React.memo(TextField);
