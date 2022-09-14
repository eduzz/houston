import * as React from 'react';

import ChevronDown from '@eduzz/houston-icons/ChevronDown';

import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import nestedComponent from '../../utils/nestedComponent';
import Fieldset, { FieldsetProps } from '../_utils/Fieldset';
import withForm from '../Form/withForm';
import SelectContext, { SelectContextProps, SelectOptionProps } from './context';
import SelectOption from './Option';

interface OwnProperties extends Omit<FieldsetProps, 'focused' | 'endAdornment'> {
  value?: any;
  name?: string;
  placeholder?: string;
  renderValue?: (value: any) => React.ReactNode;
  onChange?: (value: any) => any;
  multiple?: boolean;
  children?: React.ReactNode;

  /**
   * @deprecated Utilizar a nova estrutura de options
   */
  emptyOption?: string;
  /**
   * @deprecated Utilizar a nova estrutura de options
   */
  options?: SelectFieldOption[];
}

export interface SelectFieldProps extends OwnProperties, React.RefAttributes<HTMLSelectElement> {}

/**
 * @deprecated Utilizar a nova estrutura de options
 */
export interface SelectFieldOption {
  id?: string;
  value: string | number;
  label: string;
  disabled?: boolean;
}

const SelectField = ({
  id,
  label,
  value,
  size,
  placeholder,
  loading,
  multiple,
  renderValue,
  onChange,
  disabled,
  startAdornment,
  errorMessage,
  fullWidth,
  helperText,
  className,
  emptyOption,
  options: optionsProps,
  children
}: SelectFieldProps) => {
  const { openPopover, closePopover, isPopoverOpened, popoverTargetProps, popoverProps } = usePopover();
  const [options, setOptions] = React.useState<SelectOptionProps[]>([]);

  value = !multiple ? value : Array.isArray(value) ? value : [];

  const contextRegisterOption = React.useCallback<SelectContextProps['registerOption']>(option => {
    setOptions(options => [...options, option]);
    return () => setOptions(options => options.filter(op => op !== option));
  }, []);

  const contextOnSelect = React.useCallback<SelectContextProps['onSelect']>(
    (selected: any) => {
      if (!multiple) {
        onChange && onChange(selected);
        closePopover();
        return;
      }

      const isEmptyOption = selected === null || selected === undefined || selected === '';
      const newValue = isEmptyOption
        ? []
        : value.includes(selected)
        ? value.filter((v: any) => v !== selected)
        : [...value, selected];

      onChange && onChange(newValue);
    },
    [multiple, onChange, value, closePopover]
  );

  const contextValue = React.useMemo<SelectContextProps>(
    () => ({
      registerOption: contextRegisterOption,
      onSelect: contextOnSelect,
      inputSize: size,
      multiple: multiple ?? false,
      inputValue: value
    }),
    [contextOnSelect, contextRegisterOption, multiple, size, value]
  );

  const text = React.useMemo(() => {
    if (renderValue) return renderValue(value);

    if (!multiple) {
      return options.find(o => (value ?? '') === (o.value ?? ''))?.text ?? placeholder ?? '';
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
      ''
    );
  }, [multiple, options, placeholder, renderValue, value]);

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover {...popoverProps} placement='bottom' fullWidth keepMounted>
        {children}
        {!!emptyOption && <SelectOption label={emptyOption} />}
        {optionsProps?.map((option, index) => (
          <SelectOption
            key={option.value ?? `op-${index}`}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </Popover>

      <Fieldset
        containerRef={popoverTargetProps.ref}
        label={label}
        size={size}
        loading={loading}
        className={className}
        focused={isPopoverOpened}
        errorMessage={errorMessage}
        fullWidth={fullWidth}
        endAdornment={<ChevronDown />}
        startAdornment={startAdornment}
        helperText={helperText}
        disabled={disabled}
        onClickContainer={!disabled && !loading ? openPopover : undefined}
      >
        <div id={id} className='hst-input-text'>
          {text}
        </div>
      </Fieldset>
    </SelectContext.Provider>
  );
};

export default nestedComponent(withForm(React.memo(SelectField)), {
  Option: SelectOption
});
