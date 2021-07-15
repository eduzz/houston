import * as React from 'react';

import SwitchMUI, { SwitchProps } from '@material-ui/core/Switch';
import { useContextSelector } from 'use-context-selector';

import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';

type FieldSwitchPropsExtends = 'id' | 'className' | 'checked' | 'defaultChecked' | 'disabled' | 'size' | 'onChange';

export interface ISwitchFieldProps extends Pick<SwitchProps, FieldSwitchPropsExtends> {
  name: string;
}

const Switch = React.forwardRef<React.LegacyRef<HTMLInputElement>, ISwitchFieldProps>(
  ({ name, onChange, ...props }, ref) => {
    const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
    const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
    const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

    if (!name && setFieldValue) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setFieldValue && setFieldValue(name, checked);
      },
      [setFieldValue, name]
    );

    return (
      <SwitchMUI
        disabled={isSubmitting || props.disabled}
        name={name}
        inputRef={ref}
        onChange={onChange || handleChange}
        className={props.className}
        color='primary'
        checked={formValue ?? props.checked}
        {...props}
      />
    );
  }
);

export default withHoustonTheme(React.memo(Switch));
