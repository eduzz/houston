import * as React from 'react';

import SwitchMUI, { SwitchProps } from '@material-ui/core/Switch';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';

type FieldSwitchPropsExtends = 'id' | 'className' | 'checked' | 'defaultChecked' | 'disabled' | 'size' | 'onChange';

export interface ISwitchFieldProps extends Pick<SwitchProps, FieldSwitchPropsExtends> {
  name: string;
  form?: IFormAdapter<any>;
}

const Switch = React.forwardRef<React.LegacyRef<HTMLInputElement>, ISwitchFieldProps>(
  ({ form: formProps, name, onChange, ...props }, ref) => {
    const formContext = React.useContext(FormFieldsContext);
    const form = formProps ?? formContext;

    if (!name && form) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        form && form.setFieldValue(name, checked);
      },
      [form, name]
    );

    return (
      <WrapperTheme>
        <SwitchMUI
          disabled={form?.isSubmitting || props.disabled}
          name={name}
          inputRef={ref}
          onChange={onChange || handleChange}
          className={props.className}
          color='primary'
          checked={form?.values[name] ?? props.checked}
          {...props}
        />
      </WrapperTheme>
    );
  }
);

export default React.memo(Switch);
