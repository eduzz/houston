import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio, { RadioProps } from '@mui/material/Radio';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import { FormFieldsContext } from '../Form';
import LabelBase from './LabelBase';

const useStyles = createUseStyles({
  marginDense: { padding: '0 8px' }
});

type FieldRadioPropsExtends = 'checked' | 'value' | 'onChange';

export interface IRadioBaseFieldProps extends Pick<RadioProps, FieldRadioPropsExtends> {
  Control: typeof Radio;
  label?: React.ReactNode;
  description?: string;
  name: string;
  errorMessage?: string;
  margin?: 'none' | 'normal';
}

const BaseRadioField = React.memo<IRadioBaseFieldProps>(
  ({ Control, label, name, description, checked, errorMessage: errorMessageProp, onChange, margin, value }) => {
    const classes = useStyles();

    const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    const isChecked = React.useMemo(
      () => (formValue ? String(formValue) === String(value) : checked),
      [checked, formValue, value]
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const isBooleanValue = ['true', 'false'].includes(e.target.value);
        setFieldValue && setFieldValue(name, isBooleanValue ? e.target.value === 'true' : e.target.value);
        onChange && onChange(e, checked);
      },
      [setFieldValue, name, onChange]
    );

    const errorMessage = errorMessageProp ?? formError;
    const hasError = !!errorMessage;

    return (
      <FormControlLabel
        control={
          <Control
            disabled={isSubmitting}
            classes={{ root: margin === 'none' && classes.marginDense }}
            checked={isChecked ?? false}
            onChange={handleChange}
            name={name}
            color='primary'
            value={value}
          />
        }
        label={<LabelBase hasError={hasError} errorMessage={errorMessage} label={label} description={description} />}
      />
    );
  }
);

export default React.memo(BaseRadioField);
