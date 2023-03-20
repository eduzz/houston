import * as React from 'react';

import { Radio as AndtRadio, RadioProps as AntdRadioProps } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio/index';

import withForm, { WithFormProps } from '../Form/withForm';

export interface RadioProps extends Omit<AntdRadioProps, 'onChange' | 'value'>, WithFormProps<HTMLInputElement> {
  value?: any;
  onChange?: (value: any) => void;
  checkedValue?: any;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ value, onChange, checkedValue = true, ...props }, ref) => {
    const handleChange = React.useCallback(
      (e: RadioChangeEvent) => {
        const checked = e.target.checked;
        const newValue = checked ? checkedValue : typeof checkedValue === 'boolean' ? !checkedValue : null;
        onChange?.(newValue);
      },
      [checkedValue, onChange]
    );

    return <AndtRadio ref={ref} checked={value === checkedValue} {...props} onChange={handleChange} />;
  }
);

export default withForm(Radio, { disableMargin: true });
