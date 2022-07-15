import * as React from 'react';

import ChevronDown from '@eduzz/houston-icons/ChevronDown';

import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import nestedComponent from '../../utils/nestedComponent';
import Fieldset, { IFieldsetProps } from '../_utils/Fieldset';
import withForm from '../Form/withForm';
import SelectContext, { ISelectContext, ISelectOption } from './context';
import SelectOption from './Option';

interface IOwnProperties extends Omit<IFieldsetProps, 'focused' | 'endAdornment'> {
  value?: any;
  name?: string;
  placeholder?: string;
  renderValue?: (value: any) => string;
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
  options?: ISelectFieldOption[];
}

export interface ISelectFieldProps extends IOwnProperties, React.RefAttributes<HTMLSelectElement> {}

/**
 * @deprecated Utilizar a nova estrutura de options
 */
export interface ISelectFieldOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

const SelectField: React.FC<ISelectFieldProps> = ({
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
  disableMargin,
  emptyOption,
  options: optionsProps,
  children
}) => {
  const { openPopover, closePopover, isPopoverOpened, popoverTargetProps, popoverProps } = usePopover();
  const [options, setOptions] = React.useState<ISelectOption[]>([]);

  value = !multiple ? value : Array.isArray(value) ? value : [];

  const contextRegisterOption = React.useCallback<ISelectContext['registerOption']>(option => {
    setOptions(options => [...options, option]);
    return () => setOptions(options => options.filter(op => op !== option));
  }, []);

  const contextOnSelect = React.useCallback<ISelectContext['onSelect']>(
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

  const contextValue = React.useMemo<ISelectContext>(
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
      <Popover {...popoverProps} placement='bottom' fullWidth>
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
        disableMargin={disableMargin}
        onClickContainer={!disabled && !loading ? openPopover : undefined}
      >
        <div className='__text'>{text}</div>
      </Fieldset>
    </SelectContext.Provider>
  );
};

export default nestedComponent(withForm(React.memo(SelectField)), {
  Option: SelectOption
});
