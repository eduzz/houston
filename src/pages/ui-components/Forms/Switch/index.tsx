import * as React from 'react';

import SwitchMUI, { SwitchProps } from '@mui/material/Switch';

import { useFormIsSubmitting, useFormValue, useFormSetValue } from '@eduzz/houston-forms/context';

type FieldSwitchPropsExtends = 'id' | 'className' | 'checked' | 'defaultChecked' | 'disabled' | 'size' | 'onChange';

export interface ISwitchFieldProps extends Pick<SwitchProps, FieldSwitchPropsExtends> {
  name?: string;
}

const Switch = React.forwardRef<React.LegacyRef<HTMLInputElement>, ISwitchFieldProps>(
  ({ name, onChange, checked, ...props }, ref) => {
    const isSubmitting = useFormIsSubmitting();
    const value = useFormValue(name, checked);
    const setFormValue = useFormSetValue(name);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setFormValue && setFormValue(checked);
      },
      [setFormValue]
    );

    return (
      <SwitchMUI
        disabled={isSubmitting || props.disabled}
        name={name}
        inputRef={ref}
        onChange={onChange || handleChange}
        className={props.className}
        color='primary'
        checked={value}
        {...props}
      />
    );
  }
);

export default React.memo(Switch);
