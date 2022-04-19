import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { HexColorPicker } from 'react-colorful';
import { useContextSelector } from 'use-context-selector';

import useOnClickOutside from '../../hooks/useClickOutside';
import { cx } from '../../styled';
import { FormFieldsContext } from '../Form';
import TextField, { ITextFieldProps } from '../Text';
import useStyles from './styles';

type FieldTextPropsOmit = 'type' | 'multiline' | 'mask' | 'value' | 'onChange' | 'onBlur' | 'maxLength';

export interface IColorFieldProps extends Omit<ITextFieldProps, FieldTextPropsOmit> {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorField: React.FC<IColorFieldProps> = ({
  className,
  loading,
  value,
  defaultValue,
  endAdornment,
  startAdornment,
  InputProps,
  errorMessage: errorMessageProp,
  fullWidth,
  margin,
  name,
  onChange,
  size,
  disabled,
  ...props
}) => {
  const classes = useStyles({ size });

  const pickerRef = React.useRef<HTMLDivElement>();

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  value = formValue ?? value;

  const initialColor = value ? value : defaultValue ?? '';

  const [visible, setVisible] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>(initialColor);

  const handleClickInput = React.useCallback(() => {
    if (!disabled && !loading) {
      setVisible(true);
    }
  }, [disabled, loading]);

  const handleClosePicker = React.useCallback(() => {
    if (visible) {
      setVisible(false);
    }
  }, [visible]);

  const handleChange = React.useCallback(
    (value: string) => {
      setColor(value);
      onChange && onChange(value);
      setFieldValue && setFieldValue(name, value);
    },
    [name, onChange, setFieldValue]
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

  const errorMessage = errorMessageProp ?? formError;

  useOnClickOutside(pickerRef, handleClosePicker);

  return (
    <div className={cx(classes.root, className)}>
      <TextField
        {...props}
        disabled={isSubmitting || disabled || loading}
        helperText={errorMessage || props.helperText}
        className={cx(classes.input, size === 'small' && 'input-size-small', visible && '--active')}
        name={name}
        margin={margin ?? 'normal'}
        onClick={handleClickInput}
        value={color}
        fullWidth={fullWidth ?? true}
        InputProps={inputProps}
      />

      <div ref={pickerRef} className={cx(classes.picker, visible && '--show')}>
        <HexColorPicker color={color} onChange={handleChange} />
      </div>
    </div>
  );
};

export default React.memo(ColorField);
