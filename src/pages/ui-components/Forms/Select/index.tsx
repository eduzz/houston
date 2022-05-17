import * as React from 'react';

import { SelectChangeEvent } from '@mui/material/Select';
import { useContextSelector } from 'use-context-selector';

import ChevronDown from '@eduzz/houston-icons/ChevronDown';
import styled, { css } from '@eduzz/houston-styles';

import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import { FormFieldsContext } from '../Form';
import Fieldset, { IFieldsetProps } from '../internals/Fieldset';

interface IOwnProperties extends Omit<IFieldsetProps, 'focused' | 'endAdornment'> {
  options?: ISelectFieldOption[];
  emptyOption?: string;
  maxLabelItems?: number;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
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
    const { openPopover, popoverTargetProps, popoverProps } = usePopover();

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

    return (
      <>
        <Popover {...popoverProps}>Teste 2sdfsdfdsff</Popover>

        <Fieldset
          containterRef={popoverTargetProps.ref}
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
          onClickContainer={!disabled && !loading ? openPopover : null}
        >
          <div className='__text'>{emptyOption ?? 'Selecione...'}</div>
        </Fieldset>
      </>
    );
  }
);

export default styled(SelectField, { label: 'houston-selectfield' })(({ theme }) => css``);
