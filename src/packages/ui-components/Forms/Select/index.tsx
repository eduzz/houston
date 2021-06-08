import * as React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';

type FieldSelectPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'type' | 'fullWidth' | 'multiple' | 'className';

export interface ISelectFieldProps extends Pick<SelectProps, FieldSelectPropsExtends> {
  loading?: boolean;
  helperText?: string;
  errorMessage?: string;
  form?: IFormAdapter<any>;
  options?: ISelectFieldOption[];
  emptyOption?: string;
  maxLabelItems?: number;
  value?: any;
  onChange?: (value: any, event: React.ChangeEvent<{ name?: string; value: any }>) => any;
  margin?: 'none' | 'dense' | 'normal';
  size?: 'normal' | 'small';
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
      maxLabelItems,
      errorMessage: errorMessageProp,
      fullWidth,
      options,
      emptyOption,
      helperText,
      margin,
      size,
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
      (e: React.ChangeEvent<{ name?: string; value: any }>) => {
        let value = e.target.value;

        if (Array.isArray(value) && value.includes('')) {
          value = [];
        }

        onChange && onChange(value, e);
        form && form.setFieldValue(name, value);
      },
      [onChange, form, name]
    );

    value = form && name ? form.getFieldValue(name) : value;

    const errorMessage = errorMessageProp ?? form?.getFieldError(name);
    const hasError = !!errorMessage;

    const classes = React.useMemo(() => ({ select: size === 'small' ? 'input-size-small' : '' }), [size]);

    return (
      <WrapperTheme>
        <FormControl
          margin={margin ?? 'normal'}
          fullWidth={fullWidth ?? true}
          error={!!errorMessage}
          variant='outlined'
        >
          {!!label && <InputLabel error={!!errorMessage}>{label}</InputLabel>}
          <Select
            error={hasError}
            {...props}
            classes={classes}
            inputRef={ref}
            disabled={form?.isSubmitting || props.disabled}
            name={name}
            value={value ?? (props.multiple ? [] : '')}
            onChange={handleChange}
            fullWidth={fullWidth ?? true}
            label={label}
            endAdornment={endAdornment}
            renderValue={renderValue}
          >
            {emptyOption && <MenuItem value={''}>{emptyOption}</MenuItem>}
            {(options || []).map(option => (
              <MenuItem disabled={option.disabled} key={option.value} value={option.value}>
                {props.multiple && <Checkbox checked={value?.includes(option.value)} />}
                <ListItemText primary={option.label} />
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
