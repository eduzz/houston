export type IOmitTextFieldProps =
  | 'mask'
  | 'endAdornment'
  | 'maxLength'
  | 'onChange'
  | 'onBlur'
  | 'onError'
  | 'value'
  | 'rows'
  | 'type'
  | 'loading'
  | 'multiline';

export type IPickDatePickerProps = 'maxDate' | 'minDate' | 'disableFuture';

export type IDateFormat = 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'yyyy-MM-dd' | 'dd-MM-yyyy' | string;
