import * as React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import LabelBase from './LabelBase';

const useStyles = makeStyles(() =>
  createStyles({
    marginDense: {
      padding: '0 8px'
    }
  })
);

type FieldRadioPropsExtends = 'checked' | 'value' | 'onChange';

export interface IRadioBaseFieldProps extends Pick<RadioProps, FieldRadioPropsExtends> {
  Control: typeof Radio;
  label?: React.ReactNode;
  description?: string;
  name: string;
  errorMessage?: string;
  form?: IFormAdapter<any>;
  margin?: 'none' | 'normal';
}

const BaseRadioField = React.memo<IRadioBaseFieldProps>(
  ({
    Control,
    label,
    name,
    description,
    checked,
    form: formProps,
    errorMessage: errorMessageProp,
    onChange,
    margin,
    value
  }) => {
    const classes = useStyles();
    const formContext = React.useContext(FormFieldsContext);
    const form = formProps ?? formContext;

    const isChecked = React.useMemo(
      () => (form ? String(form.getFieldValue(name)) === String(value) : checked),
      [checked, form, name, value]
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const isBooleanValue = ['true', 'false'].includes(e.target.value);

        form?.setFieldValue(name, isBooleanValue ? e.target.value === 'true' : e.target.value);

        onChange && onChange(e, checked);
      },
      [form, name, onChange]
    );

    const errorMessage = errorMessageProp ?? form?.getFieldError(name);
    const hasError = !!errorMessage;

    return (
      <WrapperTheme>
        <FormControlLabel
          control={
            <Control
              classes={{ root: margin === 'none' && classes.marginDense }}
              checked={isChecked}
              onChange={handleChange}
              name={name}
              color='primary'
              value={value}
            />
          }
          label={<LabelBase hasError={hasError} errorMessage={errorMessage} label={label} description={description} />}
        />
      </WrapperTheme>
    );
  }
);

export default BaseRadioField;
