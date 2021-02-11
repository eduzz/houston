import * as React from 'react';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import WrapperTheme from '../../ThemeProvider/WrapperTheme';
import Typography from '../../Typography';
import { FormFieldsContext } from '../Form';

const useStyles = makeStyles(() =>
  createStyles({
    marginDense: {
      padding: 0
    }
  })
);

type FieldCheckboxPropsExtends = 'checked' | 'value' | 'onChange';

export interface ICheckboxRadioFieldProps extends Pick<CheckboxProps, FieldCheckboxPropsExtends> {
  Control: typeof Checkbox | typeof Radio;
  label: React.ReactNode;
  description?: string;
  name: string;
  errorMessage?: string;
  form?: IFormAdapter<any>;
  isMultiple?: boolean;
  margin?: 'none' | 'normal';
}

const CheckboxRadioField = React.memo<ICheckboxRadioFieldProps>(
  ({
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
      <WrapperTheme>
        <FormControlLabel
          control={
            <Control
              classes={{ root: margin === 'none' && classes.marginDense }}
              checked={isChecked}
              onChange={handleChange}
              name={name}
            />
          }
          label={
            typeof label !== 'string' ? (
              label
            ) : (
              <React.Fragment>
                <Typography>
                  {label}
                  {description && (
                    <React.Fragment>
                      <br /> <Typography size='x-small'>{description}</Typography>
                    </React.Fragment>
                  )}
                </Typography>
                {hasError && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
              </React.Fragment>
            )
          }
        />
      </WrapperTheme>
    );
  }
);

export default CheckboxRadioField;
