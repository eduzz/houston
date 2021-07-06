import * as React from 'react';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import LabelBase from './LabelBase';

const useStyles = createUseStyles({
  marginDense: { padding: '0 8px' }
});

type FieldCheckboxPropsExtends = 'checked' | 'value' | 'onChange';

export interface ICheckboxBaseFieldProps extends Pick<CheckboxProps, FieldCheckboxPropsExtends> {
  Control: typeof Checkbox;
  label?: React.ReactNode;
  description?: string;
  name: string;
  errorMessage?: string;
  form?: IFormAdapter<any>;
  isMultiple?: boolean;
  margin?: 'none' | 'normal';
}

const CheckboxRadioField: React.FC<ICheckboxBaseFieldProps> = ({
  Control,
  label,
  name,
  description,
  checked,
  form: formProps,
  value,
  errorMessage: errorMessageProp,
  isMultiple,
  onChange,
  margin
}) => {
  const classes = useStyles();
  const formContext = React.useContext(FormFieldsContext);
  const form = formProps ?? formContext;

  const isChecked = React.useMemo(() => {
    if (isMultiple) {
      return (form?.getFieldValue(name) ?? []).includes(value);
    }

    return form ? form.getFieldValue(name) === true : checked;
  }, [checked, form, isMultiple, name, value]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (!isMultiple) {
        form?.setFieldValue(name, checked);
        onChange && onChange(e, checked);
        return;
      }

      const setValue = new Set(form.getFieldValue(name) ?? []);

      if (checked) {
        setValue.add(value);
      } else {
        setValue.delete(value);
      }

      form.setFieldValue(name, Array.from(setValue));
    },
    [form, isMultiple, name, onChange, value]
  );

  const errorMessage = errorMessageProp ?? form?.getFieldError(name);
  const hasError = !!errorMessage;

  if (isMultiple && !form) {
    throw new Error(`CheckboxField ${name}: form is required for isMultiple`);
  }

  return (
    <FormControlLabel
      control={
        <Control
          classes={{ root: margin === 'none' && classes.marginDense }}
          checked={isChecked}
          onChange={handleChange}
          name={name}
          color='primary'
        />
      }
      label={<LabelBase hasError={hasError} errorMessage={errorMessage} label={label} description={description} />}
    />
  );
};

export default withHoustonTheme(React.memo(CheckboxRadioField));
