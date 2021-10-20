import * as React from 'react';

import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import { FormFieldsContext } from '../Form';
import LabelBase from './LabelBase';

const useStyles = createUseStyles({
  marginDense: { padding: '0 8px' }
});

type FieldCheckboxPropsExtends = 'checked' | 'value' | 'onChange' | 'indeterminate' | 'disabled';

export interface ICheckboxBaseFieldProps extends Pick<CheckboxProps, FieldCheckboxPropsExtends> {
  Control: typeof Checkbox;
  label?: React.ReactNode;
  description?: string;
  name?: string;
  errorMessage?: string;
  isMultiple?: boolean;
  margin?: 'none' | 'normal';
}

const CheckboxRadioField: React.FC<ICheckboxBaseFieldProps> = ({
  Control,
  label,
  name,
  description,
  checked,
  value,
  errorMessage: errorMessageProp,
  isMultiple,
  onChange,
  margin,
  disabled,
  indeterminate
}) => {
  const classes = useStyles();

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  const isChecked: boolean = React.useMemo(() => {
    if (isMultiple) {
      return (formValue ?? []).includes(value);
    }

    return formValue === true || checked;
  }, [checked, formValue, isMultiple, value]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (!isMultiple) {
        setFieldValue && setFieldValue(name, checked);
        onChange && onChange(e, checked);
        return;
      }

      const setValue = new Set(formValue ?? []);

      if (checked) {
        setValue.add(value);
      } else {
        setValue.delete(value);
      }

      setFieldValue && setFieldValue(name, Array.from(setValue));
    },
    [formValue, isMultiple, name, onChange, setFieldValue, value]
  );

  const errorMessage = errorMessageProp ?? formError;
  const hasError = !!errorMessage;

  return (
    <FormControlLabel
      control={
        <Control
          indeterminate={indeterminate}
          disabled={isSubmitting || disabled}
          classes={{ root: margin === 'none' && classes.marginDense }}
          checked={isChecked ?? false}
          defaultValue=''
          onChange={handleChange}
          name={name}
          color='primary'
        />
      }
      label={<LabelBase hasError={hasError} errorMessage={errorMessage} label={label} description={description} />}
    />
  );
};

export default React.memo(CheckboxRadioField);
