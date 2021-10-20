import * as React from 'react';
import { useCallback } from 'react';

import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { InputLabelProps } from '@mui/material/InputLabel';
import TextFieldMUI from '@mui/material/TextField';
import clsx from 'clsx';
import dateFormat from 'date-fns/format';
import { enUS, ptBR } from 'date-fns/locale';
import parseISO from 'date-fns/parseISO';
import isMobileFunc from 'is-mobile';
import ReactDatePicker, { DatePickerProps } from 'react-date-picker';
import { useContextSelector } from 'use-context-selector';

import IconArrowLeft from '@eduzz/houston-icons/ArrowLeft';
import IconArrowRight from '@eduzz/houston-icons/ArrowRight';
import IconCalendar from '@eduzz/houston-icons/Calendar';

import ButtonIcon from '../../ButtonIcon';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import { useCreateTempInputDate } from '../internals/DatePickerBase/hooks';
import { ITextFieldProps } from '../Text';
import useStyles from './styles';

type IOmitTextFieldProps =
  | 'mask'
  | 'endAdornment'
  | 'maxLength'
  | 'onChange'
  | 'value'
  | 'onBlur'
  | 'rows'
  | 'type'
  | 'multiline';

export type IDatePickerView = 'month' | 'year' | 'decade' | 'century';

export type IDateFormat = 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'yyyy-MM-dd' | 'dd-MM-yyyy' | string;

export type IDatePickerChange = (value: Date, event: React.ChangeEvent<HTMLInputElement>) => void;

export interface IDatePickerProps extends Omit<ITextFieldProps, IOmitTextFieldProps> {
  loading?: boolean;
  errorMessage?: string;
  margin?: 'none' | 'dense' | 'normal';
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
  locale?: string;
  defaultView?: IDatePickerView;
  maxDate?: Date;
  minDate?: Date;
  onChange?: IDatePickerChange;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
}

const DatePickerField: React.FC<IDatePickerProps> = ({
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
  fullWidth = true,
  ...rest
}) => {
  const inputRef = React.useRef<HTMLInputElement>();

  const [createTempInputDate] = useCreateTempInputDate();
  const isMobile = isMobileFunc();

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  const classesProps = React.useMemo(() => ({ width, size }), [width, size]);
  const classes = useStyles(classesProps);

  const [openCalendar, setOpenCalendar] = React.useState<boolean>(false);

  value = formValue ?? value;

  const handleChange = React.useCallback<IDatePickerChange>(
    (value, event) => {
      if (!value) return;
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

  const handleClickIcon = useCallback(() => inputRef?.current?.focus(), []);

  const handleClickInput = useCallback(async () => {
    if (disabled || loading) return;

    if (!isMobile) {
      setOpenCalendar(true);
      onCalendarOpen && onCalendarOpen();
      return;
    }

    const event = await createTempInputDate({ initialValue: value, onClose: onCalendarClose });
    handleChangeMobile(event);
    onCalendarOpen && onCalendarOpen();
  }, [createTempInputDate, disabled, handleChangeMobile, isMobile, loading, onCalendarClose, onCalendarOpen, value]);

  const handleCalendarOpen = React.useCallback(async () => {
    onCalendarOpen && onCalendarOpen();
  }, [onCalendarOpen]);

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
        <ButtonIcon className={classes.icon} size='small' onClick={handleClickIcon}>
          <IconCalendar />
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
  }, [classes.icon, handleClickIcon, startAdornment, loading]);

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
        ref={inputRef}
        placeholder={placeholder}
        disabled={isSubmitting || disabled || loading}
        helperText={errorMessage || helperText}
        className={clsx(classes.input, className, size === 'small' && 'input-size-small')}
        name={name}
        margin={margin ?? 'normal'}
        variant='outlined'
        onClick={handleClickInput}
        value={value ? dateFormat(value, displayFormat) : ''}
        fullWidth={width ? false : fullWidth}
        InputLabelProps={inputLabelProps}
        InputProps={inputProps}
      />

      <ReactDatePicker
        {...calendarProps}
        tileClassName={classes.days}
        className={classes.fieldPicker}
        calendarClassName={classes.calendar}
        prev2Label={null}
        next2Label={null}
        navigationLabel={props => (
          <>
            {(props.view === 'decade' || props.view === 'century') && '~'}
            {props.view === 'year' && dateFormat(props.date, 'yyy', { locale: localeNavigator })}
            {props.view === 'month' && dateFormat(props.date, 'LLL yyy', { locale: localeNavigator })}
          </>
        )}
        prevLabel={<IconArrowLeft />}
        nextLabel={<IconArrowRight />}
        isOpen={openCalendar}
        disabled={disabled || loading || isMobile}
        value={value}
        showLeadingZeros
        clearIcon={null}
        onChange={handleChange}
        onCalendarOpen={handleCalendarOpen}
        onCalendarClose={handleCalendarClose}
      />
    </div>
  );
};

export default withHoustonTheme(React.memo(DatePickerField));
