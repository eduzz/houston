import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import ChevronDown from '@eduzz/houston-icons/ChevronDown';

import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import nestedComponent from '../../utils/nestedComponent';
import { FormFieldsContext } from '../Form';
import Fieldset, { IFieldsetProps } from '../internals/Fieldset';
import SelectContext, { ISelectContext, ISelectOption } from './context';
import SelectOption from './Option';

interface IOwnProperties extends Omit<IFieldsetProps, 'focused' | 'endAdornment'> {
  value: any;
  name?: string;
  placeholder?: string;
  renderValue?: (value: any) => string;
  onChange?: (value: any) => any;
  multiple?: boolean;
}

export interface ISelectFieldProps extends IOwnProperties, React.RefAttributes<HTMLSelectElement> {}

export interface ISelectFieldOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

const SelectField: React.FC<ISelectFieldProps> = ({
  label,
  value: valueProp,
  name,
  size,
  placeholder,
  loading,
  multiple,
  renderValue,
  onChange,
  disabled,
  startAdornment,
  errorMessage: errorMessageProp,
  fullWidth,
  helperText,
  className,
  // multiple,
  children
}) => {
  const { openPopover, closePopover, isPopoverOpened, popoverTargetProps, popoverProps } = usePopover();
  const [options, setOptions] = React.useState<ISelectOption[]>([]);

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  let value = formValue ?? valueProp;
  value = !multiple ? value : Array.isArray(value) ? value : [];

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  const contextRegisterOption = React.useCallback<ISelectContext['registerOption']>(option => {
    setOptions(options => [...options, option]);
    return () => setOptions(options => options.filter(op => op !== option));
  }, []);

  const contextOnSelect = React.useCallback<ISelectContext['onSelect']>(
    (selected: any) => {
      if (!multiple) {
        onChange && onChange(selected);
        setFieldValue && setFieldValue(name, selected);
        closePopover();
        return;
      }

      const newValue = value.includes(selected) ? value.filter((v: any) => v !== selected) : [...value, selected];
      console.log({ newValue });

      onChange && onChange(newValue);
      setFieldValue && setFieldValue(name, newValue);
    },
    [multiple, onChange, value, setFieldValue, name, closePopover]
  );

  const contextValue = React.useMemo<ISelectContext>(
    () => ({
      registerOption: contextRegisterOption,
      onSelect: contextOnSelect,
      inputSize: size,
      multiple,
      inputValue: value
    }),
    [contextOnSelect, contextRegisterOption, multiple, size, value]
  );

  const text = React.useMemo(() => {
    if (renderValue) return renderValue(value);

    if (!multiple) {
      return options.find(o => (value ?? '') === (o.value ?? ''))?.text ?? placeholder ?? 'Selecione...';
    }

    if (value.length > 3) {
      return `${value.length} selecionados`;
    }

    return (
      options
        .filter(o => value.includes(o.value))
        .map(o => o.text)
        .join(', ') ||
      placeholder ||
      'Selecione...'
    );
  }, [multiple, options, placeholder, renderValue, value]);

  const errorMessage = errorMessageProp ?? formError;

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover {...popoverProps} fullWidth>
        {children}
      </Popover>

      <Fieldset
        containterRef={popoverTargetProps.ref}
        label={label}
        size={size}
        loading={loading}
        className={className}
        focused={isPopoverOpened}
        errorMessage={errorMessage || formError}
        fullWidth={fullWidth}
        endAdornment={<ChevronDown />}
        startAdornment={startAdornment}
        helperText={helperText}
        disabled={isSubmitting || disabled}
        onClickContainer={!disabled && !loading ? openPopover : null}
      >
        <div className='__text'>{text}</div>
      </Fieldset>
    </SelectContext.Provider>
  );
};

export default nestedComponent(React.memo(SelectField), {
  Option: SelectOption
});
