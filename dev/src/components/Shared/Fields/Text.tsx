/* eslint-disable no-restricted-imports */
import React, { ChangeEvent, memo, useCallback } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import TextFieldCore, { TextFieldProps } from '@material-ui/core/TextField';

import { FormikInstance } from 'hooks/useFormikObservable';
import useMask, { Masks } from 'hooks/useMask';

type IProps = TextFieldProps & {
  name: string;
  loading?: boolean;
  mask?: Masks;
  formik?: FormikInstance;
};

const TextField = memo<IProps>(({ formik, mask, value, name, loading, onChange, InputProps, ...props }) => {
  value = formik ? formik.values[name] : value;
  const { maskClean, maskedValue } = useMask(mask, value);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!formik) {
        onChange(e);
        return;
      }

      formik.setFieldTouched(name, true, false);
      formik.setFieldValue(name, maskClean(e.currentTarget.value), true);
    },
    [formik, name, maskClean, onChange]
  );

  const hasError = formik && (formik.touched[name] || formik.submitCount > 0) && !!formik.errors[name];

  return (
    <TextFieldCore
      error={hasError}
      {...props}
      disabled={formik?.isSubmitting || props.disabled}
      helperText={hasError ? formik.errors[name] : props.helperText}
      name={name}
      value={maskedValue ?? ''}
      onChange={handleChange}
      InputProps={{
        endAdornment: !loading ? null : (
          <InputAdornment position='end'>
            <CircularProgress color='secondary' size={20} />
          </InputAdornment>
        ),
        ...(InputProps || {})
      }}
    />
  );
});

export default TextField;
