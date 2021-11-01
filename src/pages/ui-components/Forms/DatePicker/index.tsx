import * as React from 'react';

import DatePicker, { DatePickerProps } from '@mui/lab/DatePicker';
import { DatePickerView } from '@mui/lab/DatePicker/shared';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import CalendarIcon from '@eduzz/houston-icons/Calendar';

import useHoustonTheme from '../../styles/useHoustonTheme';
import { FormFieldsContext } from '../Form';
import { ITextFieldProps } from '../Text';
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
  defaultView?: DatePickerView;
}

const DatePickerField: React.FC<IDatePickerProps> = ({
  name,
  value = '',
  errorMessage: errorMessageProp,
  helperText,
  fullWidth = false,
  onChange,
  className,
  size,
  margin = 'normal',
  disabled,
  displayFormat = 'dd/MM/yyyy',
  defaultView = 'day',
  ...rest
}) => {
  const { variables } = useHoustonTheme();

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
  const hasError = !!errorMessage;

  const inputProps = React.useMemo(
    () => ({
      error: hasError,
      helperText: errorMessage || helperText,
      className: clsx(className, size === 'small' && 'input-size-small'),
      margin,
      fullWidth
    }),
    [className, errorMessage, fullWidth, hasError, helperText, margin, size]
  );

  const buttonsText = {
    'pt-BR': { cancel: 'Cancelar', confirm: 'Selecionar' },
    'en-US': { cancel: 'Cancel', confirm: 'OK' }
  };

  return (
    <DatePicker
      renderInput={props => <TextField {...props} {...inputProps} />}
      value={value}
      openTo={defaultView}
      inputFormat={displayFormat}
      disabled={isSubmitting || disabled}
      onChange={handleChange}
      components={{ OpenPickerIcon: CalendarIcon }}
      showToolbar={false}
      cancelText={buttonsText[variables.lang].cancel}
      okText={buttonsText[variables.lang].confirm}
      {...rest}
    />
  );
};

export default React.memo(DatePickerField);
