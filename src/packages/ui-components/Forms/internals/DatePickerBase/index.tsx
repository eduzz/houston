import * as React from 'react';
import ReactDatePicker, { DatePickerProps } from 'react-date-picker';

import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import TextFieldMUI from '@material-ui/core/TextField';

import clsx from 'clsx';
import dateFormat from 'date-fns/format';
import { enUS, ptBR } from 'date-fns/locale';
import parseISO from 'date-fns/parseISO';
import isMobile from 'is-mobile';
import { useContextSelector } from 'use-context-selector';

import ButtonIcon from '../../../ButtonIcon';
import withHoustonTheme from '../../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../../Form';
import { ITextFieldProps } from '../../Text';
import { useCreateTempInputDate } from './hooks';
import Icons from './icons';
import useStyles from './styles';

type IOmitTextFieldProps = 'mask' | 'startAdornment' | 'endAdornment' | 'maxLength' | 'onChange' | 'value' | 'onBlur';

export type IDatePickerView = 'month' | 'year' | 'decade' | 'century';

export type IDateFormat = 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'yyyy-MM-dd' | 'dd-MM-yyyy' | string;

export type IDatePickerChange = (value: Date, event: React.ChangeEvent<HTMLInputElement>) => void;

export interface IDatePickerFieldProps extends Omit<ITextFieldProps, IOmitTextFieldProps> {
  loading?: boolean;
  errorMessage?: string;
  margin?: 'none' | 'dense' | 'normal';
  startAdornment?: React.ReactNode;
  size?: 'normal' | 'small';
  value?: Date;
  /*
    Input size.
  */
  width?: number;
  /*
    [Available formats]{@link https://date-fns.org/v2.22.1/docs/format}
  */
  displayFormat?: IDateFormat;
  /*
    IETF language tag.
    Default: pt-BR
  */
  defaultView?: IDatePickerView;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  onChange?: IDatePickerChange;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
}

const DatePickerField: React.FC<IDatePickerFieldProps> = ({
  name,
  placeholder,
  errorMessage: errorMessageProp,
  value,
  className,
  loading,
  startAdornment,
  onChange,
  defaultView = 'month',
  locale = 'pt-BR',
  maxDate,
  minDate,
  onCalendarClose,
  onCalendarOpen,
  displayFormat = 'dd/MM/yyyy',
  size,
  width,
  disabled,
  margin,
  helperText,
  fullWidth,
  ...rest
}) => {
  const [createTempInputDate] = useCreateTempInputDate();

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  const classesProps = React.useMemo(() => ({ width, size }), [size, width]);
  const classes = useStyles(classesProps);

  const [openCalendar, setOpenCalendar] = React.useState<boolean>(false);

  value = formValue ?? value;

  const handleChange = React.useCallback<IDatePickerChange>(
    (value, event) => {
      setFieldValue && setFieldValue(name, value);
      onChange && onChange(value, event);
    },
    [onChange, setFieldValue, name]
  );

  const handleChangeMobile = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (!value) return;

      const newValue = parseISO(value);
      setFieldValue && setFieldValue(name, new Date(newValue));
      onChange && onChange(new Date(newValue), event);
    },
    [name, onChange, setFieldValue]
  );

  const handleClickInput = React.useCallback(async () => {
    if (disabled || loading) return;

    if (!isMobile()) {
      !openCalendar && setOpenCalendar(true);
      return;
    }

    const valueDate = await createTempInputDate({ initialValue: value, onClose: onCalendarClose });
    handleChangeMobile(valueDate);
  }, [createTempInputDate, disabled, handleChangeMobile, loading, onCalendarClose, openCalendar, value]);

  const handleCalendarClose = React.useCallback(() => {
    onCalendarClose && onCalendarClose();
    setOpenCalendar(false);
  }, [onCalendarClose]);

  const calendarProps: Partial<DatePickerProps> = React.useMemo(
    () => ({
      defaultView,
      locale,
      maxDate,
      minDate,
      onCalendarOpen,
      onCalendarClose
    }),
    [defaultView, locale, maxDate, minDate, onCalendarOpen, onCalendarClose]
  );

  const inputLabelProps = React.useMemo<InputLabelProps>(
    () => ({
      ...(placeholder ? { shrink: true } : {})
    }),
    [placeholder]
  );

  const inputProps = React.useMemo(() => {
    let end = (
      <InputAdornment position='end'>
        <ButtonIcon className={classes.icon} size='small'>
          {Icons.calendar}
        </ButtonIcon>
      </InputAdornment>
    );

    let start = null;

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
      endAdornment: end,
      startAdornment: start
    };
  }, [loading, startAdornment, classes.icon]);

  const localeNavigator = React.useMemo(() => {
    if (locale === 'pt-BR') {
      return ptBR;
    }

    return enUS;
  }, [locale]);

  const errorMessage = errorMessageProp ?? formError;
  const hasError = !!errorMessage;

  return (
    <div className={classes.root}>
      <TextFieldMUI
        error={hasError}
        {...rest}
        disabled={isSubmitting || disabled || loading}
        helperText={errorMessage || helperText}
        className={clsx(classes.input, className, size === 'small' && 'input-size-small')}
        name={name}
        margin={margin ?? 'normal'}
        variant='outlined'
        onClick={handleClickInput}
        value={value ? dateFormat(value, displayFormat) : ''}
        fullWidth={fullWidth ?? true}
        InputLabelProps={inputLabelProps}
        InputProps={inputProps}
      />

      <ReactDatePicker
        {...calendarProps}
        prev2Label={null}
        next2Label={null}
        navigationLabel={props => (
          <>
            {(props.view === 'decade' || props.view === 'century') && '~'}
            {props.view === 'year' && dateFormat(props.date, 'yyy', { locale: localeNavigator })}
            {props.view === 'month' && dateFormat(props.date, 'LLL yyy', { locale: localeNavigator })}
          </>
        )}
        prevLabel={Icons.prev}
        nextLabel={Icons.next}
        isOpen={openCalendar}
        value={value}
        showLeadingZeros
        onChange={handleChange}
        onCalendarClose={handleCalendarClose}
      />
    </div>
  );
};

export default withHoustonTheme(React.memo(DatePickerField));
