export type OmitTextFieldProps =
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

export type PickDatePickerProps = 'maxDate' | 'minDate' | 'disableFuture';

export type DateFormat = 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'yyyy-MM-dd' | 'dd-MM-yyyy' | string;
