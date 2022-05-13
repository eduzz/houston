import * as React from 'react';

import { CalendarPickerView } from '@mui/lab';
import DatePicker, { DatePickerProps } from '@mui/lab/DatePicker';
import { TextFieldProps } from '@mui/material';
import { useContextSelector } from 'use-context-selector';

import CalendarIcon from '@eduzz/houston-icons/Calendar';

import { FormFieldsContext } from '../Form';
import TextField, { ITextFieldProps } from '../Text';
import { IDateFormat, IOmitTextFieldProps, IPickDatePickerProps } from './types';

export interface IDatePickerProps
  extends Omit<ITextFieldProps, IOmitTextFieldProps>,
    Pick<DatePickerProps, IPickDatePickerProps> {
  value?: Date;
  /*
    [Available formats]{@link https://date-fns.org/v2.22.1/docs/format}
  */
  displayFormat?: IDateFormat;
  onChange?: (date: Date) => void;
  defaultView?: CalendarPickerView;
}

const DatePickerField: React.FC<IDatePickerProps> = ({
  name,
  value = '',
  errorMessage: errorMessageProp,
  onChange,
  disabled,
  displayFormat = 'dd/MM/yyyy',
  defaultView = 'day',
  ...inputProps
}) => {
  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  value = formValue ?? value;

  const handleChange = React.useCallback(
    (value: Date) => {
      onChange && onChange(value);
      setFieldValue && setFieldValue(name, value);
    },
    [onChange, setFieldValue, name]
  );

  const errorMessage = errorMessageProp ?? formError;

  return (
    <DatePicker
      renderInput={RenderTextField}
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

const RenderTextField: React.FC<TextFieldProps & ITextFieldProps> = ({
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
    <TextField
      ref={inputRef as any}
      {...(inputProps as any)}
      {...InputProps}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default React.memo(DatePickerField);
