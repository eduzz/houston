import * as React from 'react';

import { Checkbox as AndtCheckbox, CheckboxProps as AntdCheckboxProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox/index';

import withForm, { WithFormProps } from '../Form/withForm';

export interface CheckboxProps extends Omit<AntdCheckboxProps, 'onChange' | 'value'>, WithFormProps<HTMLInputElement> {
  value?: any;
  onChange?: (value: any) => void;
  multiple?: boolean;
  checkedValue?: any;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ value, onChange, multiple, checkedValue = true, ...props }, ref) => {
    const handleChange = React.useCallback(
      (e: CheckboxChangeEvent) => {
        if (!onChange) return;

        const checked = e.target.checked;
        const newValue = checked ? checkedValue : typeof checkedValue === 'boolean' ? !checkedValue : null;

        if (!multiple) {
          onChange(newValue);
          return;
        }

        const result = new Set([newValue, ...(value ?? []).filter((v: any) => v !== checkedValue)].filter(v => !!v));
        onChange(Array.from(result));
      },
      [checkedValue, multiple, value, onChange]
    );

    const checked = Array.isArray(value) ? value?.includes(checkedValue) : value === checkedValue;
    return <AndtCheckbox ref={ref} checked={checked ?? false} {...props} onChange={handleChange} />;
  }
);

export default withForm(Checkbox, { disableMargin: true });
