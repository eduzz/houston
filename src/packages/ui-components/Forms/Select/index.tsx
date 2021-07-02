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
import { makeStyles } from '@material-ui/core/styles';

import { useContextSelector } from 'use-context-selector';

import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';

type FieldSelectPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'type' | 'fullWidth' | 'multiple' | 'className';

export interface ISelectFieldProps extends Pick<SelectProps, FieldSelectPropsExtends> {
  loading?: boolean;
  helperText?: string;
  errorMessage?: string;
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

const useStyles = makeStyles(() => ({
  endAdornment: {
    background: 'white',
    position: 'relative',
    zIndex: 1,
    right: -2
  }
}));

const SelectField = React.forwardRef<React.LegacyRef<HTMLSelectElement>, ISelectFieldProps>(
  (
    {
      label,
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
    const classes = useStyles();

    const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    if (!name && setFieldValue) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    const endAdornment = React.useMemo(
      () =>
        !loading ? null : (
          <InputAdornment position='end'>
            <div className={classes.endAdornment}>
              <CircularProgress color='secondary' size={20} />
            </div>
          </InputAdornment>
        ),
      [loading, classes.endAdornment]
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
        setFieldValue && setFieldValue(name, value);
      },
      [onChange, setFieldValue, name]
    );

    value = formValue ?? value;

    const errorMessage = errorMessageProp ?? formError;
    const hasError = !!errorMessage;

    const styles = React.useMemo(() => ({ select: size === 'small' ? 'input-size-small' : '' }), [size]);

    return (
      <WrapperTheme>
        <FormControl
          margin={margin ?? 'normal'}
          fullWidth={fullWidth ?? true}
          error={!!errorMessage}
          variant='outlined'
        >
          {!!label && (
            <InputLabel disabled={props.disabled || loading} error={!!errorMessage}>
              {label}
            </InputLabel>
          )}

          <Select
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
              <MenuItem disabled={option.disabled} key={`option-value-${option.value}`} value={option.value}>
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
