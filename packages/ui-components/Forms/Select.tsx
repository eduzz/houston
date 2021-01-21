import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import WrapperTheme from '../ThemeProvider/WrapperTheme';
import { FormFieldsContext } from './Form';

type FieldSelectPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'type' | 'fullWidth' | 'multiple' | 'value';

export interface ISelectFieldProps extends Pick<SelectProps, FieldSelectPropsExtends> {
  loading?: boolean;
  helperText?: string;
  errorMessage?: string;
  form?: IFormAdapter<any>;
  options?: ISelectFieldOption[];
  emptyOption?: string;
  onChange?: (value: any, event: React.ChangeEvent<{ name?: string; value: any }>) => any;
}

export interface ISelectFieldOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

const SelectField = React.forwardRef<React.LegacyRef<HTMLSelectElement>, ISelectFieldProps>(
  (
    {
      label,
      form: formProps,
      value,
      name,
      loading,
      onChange,
      errorMessage: errorMessageProp,
      fullWidth,
      options,
      emptyOption,
      helperText,
      ...props
    },
    ref
  ) => {
    const formContext = React.useContext(FormFieldsContext);
    const form = formProps ?? formContext;

    if (!name && form) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    const endAdornment = React.useMemo(
      () =>
        !loading ? null : (
          <InputAdornment position='end'>
            <div style={{ backgroundColor: 'white', zIndex: 1, position: 'relative' }}>
              <CircularProgress color='secondary' size={20} />
            </div>
          </InputAdornment>
        ),
      [loading]
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<{ name?: string; value: any }>) => {
        onChange && onChange(e.target.value, e);
        form && form.setFieldValue(name, e.target.value);
      },
      [onChange, form, name]
    );

    value = form && name ? form.getFieldValue(name) : value;

    const errorMessage = errorMessageProp ?? form?.getFieldError(name);
    const hasError = !!errorMessage;

    return (
      <WrapperTheme>
        <FormControl margin={'normal'} fullWidth={fullWidth ?? true} error={!!errorMessage} variant='outlined'>
          {!!label && <InputLabel error={!!errorMessage}>{label}</InputLabel>}
          <Select
            error={hasError}
            {...props}
            inputRef={ref}
            disabled={form?.isSubmitting || props.disabled}
            name={name}
            value={value ?? ''}
            onChange={handleChange}
            fullWidth={fullWidth ?? true}
            label={label}
            endAdornment={endAdornment}
          >
            {emptyOption && <MenuItem value={''}>{emptyOption}</MenuItem>}
            {(options || []).map(option => (
              <MenuItem disabled={option.disabled} key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {!!(errorMessage || helperText) && (
            <FormHelperText error={!!errorMessage} variant='outlined'>
              {errorMessage || helperText}
            </FormHelperText>
          )}
        </FormControl>
      </WrapperTheme>
    );
  }
);

export default React.memo(SelectField);
