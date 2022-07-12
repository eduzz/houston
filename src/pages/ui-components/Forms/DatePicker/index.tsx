import * as React from 'react';

import { CalendarPickerView } from '@mui/lab';
import { TextFieldProps } from '@mui/material';
import { DatePickerProps, DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';

import CalendarIcon from '@eduzz/houston-icons/Calendar';

import withForm, { WithFormProps } from '../Form/withForm';
import Input, { InputProps } from '../Input';
import { IDateFormat, IPickDatePickerProps } from './types';

export interface IDatePickerProps
  extends Omit<
      InputProps<Date>,
      'mask' | 'endAdornment' | 'onChange' | 'onBlur' | 'onError' | 'rows' | 'type' | 'multiline' | 'disableAutoResize'
    >,
    Pick<DatePickerProps<any, any>, IPickDatePickerProps>,
    Omit<WithFormProps<HTMLInputElement>, 'value'> {
  /*
    [Available formats]{@link https://date-fns.org/v2.22.1/docs/format}
  */
  displayFormat?: IDateFormat;
  onChange?: (date: Date | null) => void;
  defaultView?: CalendarPickerView;
}

const DatePicker: React.FC<IDatePickerProps> = ({
  value,
  errorMessage,
  onChange,
  disabled,
  displayFormat = 'dd/MM/yyyy',
  defaultView = 'day',
  placeholder = '',
  ...inputProps
}) => {
  const handleChange = React.useCallback((date: Date | null) => onChange && onChange(date), [onChange]);

  return (
    <DatePickerMUI
      renderInput={RenderInput}
      InputProps={{ ...inputProps, errorMessage, placeholder } as any}
      value={value}
      openTo={defaultView}
      inputFormat={displayFormat}
      disabled={disabled}
      onChange={handleChange}
      components={{ OpenPickerIcon: CalendarIcon }}
      showToolbar={false}
    />
  );
};

const RenderInput = ({ inputRef, inputProps, InputProps }: TextFieldProps) => {
  const handleChange = React.useCallback(
    (v: string, e: React.ChangeEvent<HTMLInputElement>) => {
      inputProps?.onChange && inputProps.onChange(e);
    },
    [inputProps]
  );

  return <Input ref={inputRef as any} {...(inputProps as any)} {...InputProps} onChange={handleChange} name={null} />;
};

export default withForm(React.memo(DatePicker));
