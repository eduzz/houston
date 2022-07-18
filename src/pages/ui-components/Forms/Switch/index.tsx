import * as React from 'react';

import SwitchMUI, { SwitchProps } from '@mui/material/Switch';

import withForm from '../Form/withForm';

type FieldSwitchPropsExtends = 'id' | 'className' | 'checked' | 'defaultChecked' | 'disabled' | 'size' | 'onChange';

export interface SwitchFieldProps extends Pick<SwitchProps, FieldSwitchPropsExtends> {
  name?: string;
}

const Switch = React.forwardRef<React.LegacyRef<HTMLInputElement>, SwitchFieldProps>(
  ({ name, onChange, checked, disabled, ...props }, ref) => {
    return (
      <SwitchMUI
        disabled={disabled}
        name={name}
        inputRef={ref}
        onChange={onChange}
        className={props.className}
        color='primary'
        checked={checked ?? (props as any).value}
        {...props}
      />
    );
  }
);

export default withForm(React.memo(Switch));
