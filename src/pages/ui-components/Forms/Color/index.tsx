import * as React from 'react';

import { HexColorPicker } from 'react-colorful';

import { useFormValue, useFormError, useFormSetValue } from '@eduzz/houston-forms/context';
import useBoolean from '@eduzz/houston-hooks/useBoolean';
import { cx, IStyledProp } from '@eduzz/houston-styles';

import useOnClickOutside from '../../hooks/useClickOutside';
import Input, { IInputProps } from '../Input';
import useStyles from './styles';

export interface IColorFieldProps
  extends IStyledProp,
    Omit<IInputProps<string>, 'type' | 'multiline' | 'mask' | 'rows' | 'disableAutoResize' | 'onChange'> {
  onChange(value: string): void;
}

const ColorField: React.FC<IColorFieldProps> = ({
  className,
  name,
  value: valueProp,
  errorMessage: errorMessageProp,
  onChange,
  ...props
}) => {
  const classes = useStyles();

  const pickerRef = React.useRef<HTMLDivElement>();
  const [visible, , setVisibleTrue, setVisibleFalse] = useBoolean(false);

  const value = useFormValue(name, valueProp);
  const errorMessage = useFormError(name, errorMessageProp);
  const setFormValue = useFormSetValue(name);

  const handleChange = React.useCallback(
    (value: string) => {
      onChange && onChange(value);
      setFormValue && setFormValue(value);
    },
    [onChange, setFormValue]
  );

  useOnClickOutside(pickerRef, () => setVisibleFalse(), []);

  return (
    <div className={cx(classes.root, className)}>
      <Input {...props} value={value} errorMessage={errorMessage} onClick={setVisibleTrue} />

      <div ref={pickerRef} className={cx(classes.picker, visible && '--show')}>
        <HexColorPicker color={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default React.memo(ColorField);
