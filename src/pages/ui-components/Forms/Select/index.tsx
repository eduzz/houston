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
}

export interface ISelectFieldProps extends IOwnProperties, React.RefAttributes<HTMLSelectElement> {}

export interface ISelectFieldOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

const SelectField: React.FC<ISelectFieldProps> = ({
  label,
  value,
  name,
  placeholder,
  loading,
  renderValue,
  onChange,
  disabled,
  startAdornment,
  errorMessage: errorMessageProp,
  fullWidth,
  helperText,
  className,
  children
}) => {
  const { openPopover, closePopover, popoverTargetProps, popoverProps } = usePopover();
  const [options, setOptions] = React.useState<ISelectOption[]>([]);

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  const handleChange = React.useCallback(
    (value: any) => {
      if (Array.isArray(value) && value.includes('')) {
        value = [];
      }

      onChange && onChange(value);
      setFieldValue && setFieldValue(name, value);
      closePopover();
    },
    [onChange, setFieldValue, name, closePopover]
  );

  value = formValue ?? value;

  const contextValue = React.useMemo<ISelectContext>(
    () => ({
      registerOption(option) {
        setOptions(options => [...options, option]);
        return () => setOptions(options => options.filter(op => op !== option));
      },
      onSelect: handleChange
    }),
    [handleChange]
  );

  const text = React.useMemo(() => {
    if (renderValue) return renderValue(value);
    if (value === undefined || value === null || value === '') {
      return placeholder ?? 'Selecione...';
    }

    if (!Array.isArray(value)) {
      return options.find(o => value === o.value)?.text;
    }

    if (value.length > 3) {
      return `${value.length} selecionados`;
    }

    return options
      .filter(o => (value as any[]).includes(o.value))
      .map(o => o.text)
      .join(', ');
  }, [options, placeholder, renderValue, value]);

  const errorMessage = errorMessageProp ?? formError;

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover {...popoverProps}>{children}</Popover>

      <Fieldset
        containterRef={popoverTargetProps.ref}
        label={label}
        loading={loading}
        className={className}
        focused={false} //TODO
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

export default nestedComponent(SelectField, {
  Option: SelectOption
});
