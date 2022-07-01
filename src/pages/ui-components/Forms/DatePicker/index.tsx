import * as React from 'react';

import { CalendarPickerView } from '@mui/lab';
import { TextFieldProps } from '@mui/material';
import { DatePickerProps, DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';

import { useFormIsSubmitting, useFormValue, useFormError, useFormSetValue } from '@eduzz/houston-forms/context';
import CalendarIcon from '@eduzz/houston-icons/Calendar';

import Input, { IInputProps } from '../Input';
import { IDateFormat, IPickDatePickerProps } from './types';

export interface IDatePickerProps
  extends Omit<
      IInputProps<Date>,
      'mask' | 'endAdornment' | 'onChange' | 'onBlur' | 'onError' | 'rows' | 'type' | 'multiline' | 'disableAutoResize'
    >,
    Pick<DatePickerProps<any, any>, IPickDatePickerProps> {
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
  placeholder = '',
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
      InputProps={{ ...inputProps, errorMessage, placeholder } as any}
      value={value}
      openTo={defaultView}
      inputFormat={displayFormat}
      disabled={isSubmitting || disabled}
      onChange={handleChange}
      components={{ OpenPickerIcon: CalendarIcon }}
      showToolbar={false}
    />
  );
};

const RenderInput: React.FC<TextFieldProps & IInputProps> = ({ inputRef, inputProps, InputProps }) => {
  return <Input ref={inputRef as any} {...(inputProps as any)} {...InputProps} name={null} />;
};

export default React.memo(DatePicker);
