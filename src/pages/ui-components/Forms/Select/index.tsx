import * as React from 'react';

import { SelectChangeEvent } from '@mui/material/Select';
import { useContextSelector } from 'use-context-selector';

import ChevronDown from '@eduzz/houston-icons/ChevronDown';
import styled from '@eduzz/houston-styles';

import Popover, { IPopoverRef } from '../../Popover';
import { FormFieldsContext } from '../Form';
import Fieldset, { IFieldsetProps } from '../internals/Fieldset';

interface IOwnProperties extends Omit<IFieldsetProps, 'focused' | 'endAdornment'> {
  options?: ISelectFieldOption[];
  emptyOption?: string;
  maxLabelItems?: number;
}

export interface ISelectFieldProps
  extends IOwnProperties,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof IOwnProperties>,
    React.RefAttributes<HTMLSelectElement> {}

export interface ISelectFieldOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

const SelectField = React.forwardRef<React.LegacyRef<HTMLSelectElement>, ISelectFieldProps>(
  (
    {
      label,
      value,
      name,
      loading,
      onChange,
      disabled,
      maxLabelItems,
      startAdornment,
      errorMessage: errorMessageProp,
      fullWidth,
      options,
      emptyOption,
      helperText,
      className,
      ...props
    },
    ref
  ) => {
    const fieldsetRef = React.useRef<HTMLFieldSetElement>();
    const popoverRef = React.useRef<IPopoverRef>();

    const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    if (!name && setFieldValue) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    // const endAdornment = React.useMemo(
    //   () =>
    //     !loading ? null : (
    //       <InputAdornment position='end'>
    //         <div className={classes.endAdornment}>
    //           <CircularProgress color='secondary' size={20} />
    //         </div>
    //       </InputAdornment>
    //     ),
    //   [loading, classes.endAdornment]
    // );

    const renderValue = React.useCallback(
      selected => {
        return !Array.isArray(selected)
          ? options.find(o => selected === o.value)?.label
          : selected.length > (maxLabelItems ?? 3)
          ? `${selected.length} selecionados`
          : options
              .filter(o => selected.includes(o.value))
              .map(o => o.label)
              .join(', ');
      },
      [options, maxLabelItems]
    );

    const handleChange = React.useCallback(
      (e: SelectChangeEvent<{ name?: string; value: any }>) => {
        let value: any = e.target.value;

        if (Array.isArray(value) && value.includes('')) {
          value = [];
        }

        onChange && onChange(value, e);
        setFieldValue && setFieldValue(name, value);
      },
      [onChange, setFieldValue, name]
    );

    value = formValue ?? value;

    const errorMessage = errorMessageProp ?? formError;
    const hasError = !!errorMessage;

    const handleClick = React.useCallback(() => {
      console.log({ popoverRef });
      popoverRef.current.open();
    }, []);

    return (
      <>
        <Popover ref={popoverRef} targetRef={fieldsetRef}>
          Teste 2
        </Popover>

        <Fieldset
          ref={fieldsetRef}
          label={label}
          loading={loading}
          focused={false} //TODO
          errorMessage={errorMessage || formError}
          fullWidth={fullWidth}
          endAdornment={<ChevronDown />}
          startAdornment={startAdornment}
          helperText={helperText}
          disabled={isSubmitting || disabled}
          className={className}
          onClickContainer={handleClick}
        >
          <div />
          {/* <select
          error={hasError}
          {...props}
          classes={{ ...styles }}
          inputRef={ref}
          disabled={isSubmitting || props.disabled || loading}
          name={name}
          value={value ?? (props.multiple ? [] : '')}
          onChange={handleChange}
          fullWidth={fullWidth ?? true}
          label={label}
          endAdornment={endAdornment}
          renderValue={renderValue}
        >
          {emptyOption && (
            <MenuItem disabled value={''}>
              {emptyOption}
            </MenuItem>
          )}

          {(options || []).map(option => (
            <option disabled={option.disabled} key={`option-value-${option.value}`} value={option.value}>
              {props.multiple && <Checkbox checked={value?.includes(option.value)} />}
              <ListItemText primary={option.label} />
            </option>
          ))}
        </select> */}
        </Fieldset>
      </>
    );
  }
);

export default styled(SelectField, { label: 'houston-selectfield' })``;
