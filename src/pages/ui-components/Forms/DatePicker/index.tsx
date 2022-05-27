import * as React from 'react';

import { CalendarPickerView } from '@mui/lab';
import DatePickerMUI, { DatePickerProps } from '@mui/lab/DatePicker';
import { TextFieldProps } from '@mui/material';

import { useFormIsSubmitting, useFormValue, useFormError, useFormSetValue } from '@eduzz/houston-forms/context';
import CalendarIcon from '@eduzz/houston-icons/Calendar';

import Input, { IInputProps } from '../Input';
import { IDateFormat, IPickDatePickerProps } from './types';

export interface IDatePickerProps
  extends Omit<
      IInputProps<Date>,
      'mask' | 'endAdornment' | 'onChange' | 'onBlur' | 'onError' | 'rows' | 'type' | 'multiline' | 'disableAutoResize'
    >,
    Pick<DatePickerProps, IPickDatePickerProps> {
  /*
    [Available formats]{@link https://date-fns.org/v2.22.1/docs/format}
  */
  displayFormat?: IDateFormat;
  onChange?: (date: Date) => void;
  defaultView?: CalendarPickerView;
}

const DatePicker: React.FC<IDatePickerProps> = ({
  name,
  value: valueProp,
  errorMessage: errorMessageProp,
  onChange,
  disabled,
  displayFormat = 'dd/MM/yyyy',
  defaultView = 'day',
  ...inputProps
}) => {
  const isSubmitting = useFormIsSubmitting();
  const value = useFormValue(name, valueProp);
  const errorMessage = useFormError(name, errorMessageProp);
  const setFormValue = useFormSetValue(name);

  const handleChange = React.useCallback(
    (value: Date) => {
      onChange && onChange(value);
      setFormValue && setFormValue(value);
    },
    [onChange, setFormValue]
  );

  return (
    <DatePickerMUI
      renderInput={RenderInput}
      InputProps={{ ...inputProps, errorMessage } as any}
      value={value}
      openTo={defaultView}
      inputFormat={displayFormat}
      disabled={isSubmitting || disabled}
      onChange={handleChange}
      components={{ OpenPickerIcon: CalendarIcon }}
      showToolbar={false}
      cancelText='Cancelar'
      okText='Selecionar'
    />
  );
};

const RenderInput: React.FC<TextFieldProps & IInputProps> = ({
  inputRef,
  inputProps: { onChange, onBlur, ...inputProps },
  InputProps
}) => {
  const handleChange = React.useCallback(
    (v: any, e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e),
    [onChange]
  );

  const handleBlur = React.useCallback(
    (v: any, e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => onBlur(e),
    [onBlur]
  );

  return (
    <Input
      ref={inputRef as any}
      {...(inputProps as any)}
      {...InputProps}
      name={null}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default React.memo(DatePicker);
