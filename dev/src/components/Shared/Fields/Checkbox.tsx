import React, { ChangeEvent, Fragment, memo, ReactNode, useCallback, useMemo } from 'react';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

import { FormikInstance } from 'hooks/useFormikObservable';

interface IProps extends CheckboxProps {
  label: ReactNode;
  description?: string;
  name: string;
  formik?: FormikInstance;
  isMultiple?: boolean;
}

const CheckboxField = memo<IProps>(
  ({ label, name, description, checked, formik, value, isMultiple, onChange, ...props }) => {
    const isChecked = useMemo(() => {
      if (isMultiple) {
        return (formik?.values[name] ?? []).includes(value);
      }

      return formik ? formik.values[name] === true : checked;
    }, [checked, formik, isMultiple, name, value]);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!isMultiple) {
          formik?.setFieldTouched(name, true, false);
          formik?.setFieldValue(name, checked, true);
          onChange && onChange(e, checked);
          return;
        }

        const setValue = new Set(formik.values[name] ?? []);

        if (checked) {
          setValue.add(value);
        } else {
          setValue.delete(value);
        }

        formik.setFieldTouched(name, true, false);
        formik.setFieldValue(name, Array.from(setValue), true);
      },
      [formik, isMultiple, name, onChange, value]
    );

    const hasError = isMultiple
      ? false
      : formik && formik.touched[name] && formik.submitCount > 0 && !!formik.errors[name];

    if (isMultiple && !formik) {
      throw new Error(`CheckboxField ${name}: formik is required for isMultiple`);
    }

    return (
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleChange} {...props} name={name} />}
        label={
          typeof label !== 'string' ? (
            label
          ) : (
            <Fragment>
              <Typography>
                {label}
                {description && (
                  <Fragment>
                    <br /> <Typography variant='caption'>{description}</Typography>
                  </Fragment>
                )}
              </Typography>
              {hasError && <FormHelperText error={true}>{formik.errors[name]}</FormHelperText>}
            </Fragment>
          )
        }
      />
    );
  }
);

export default CheckboxField;
