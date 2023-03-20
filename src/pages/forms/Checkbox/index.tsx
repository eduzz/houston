import * as React from 'react';

import { Checkbox as AndtCheckbox, CheckboxProps as AntdCheckboxProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox/index';

import withForm, { WithFormProps } from '../Form/withForm';

export interface CheckboxProps extends Omit<AntdCheckboxProps, 'onChange' | 'value'>, WithFormProps<HTMLInputElement> {
  value?: any;
  onChange?: (value: any) => void;
  checkedValue?: any;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ value, onChange, checkedValue = true, ...props }, ref) => {
    const handleChange = React.useCallback(
      (e: CheckboxChangeEvent) => {
        const checked = e.target.checked;
        const newValue = checked ? checkedValue : typeof checkedValue === 'boolean' ? !checkedValue : null;
        onChange?.(newValue);
      },
      [checkedValue, onChange]
    );

    return <AndtCheckbox ref={ref} checked={value === checkedValue} {...props} onChange={handleChange} />;
  }
);

export default withForm(Checkbox, { disableMargin: true });
