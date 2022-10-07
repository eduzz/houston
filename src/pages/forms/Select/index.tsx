import * as React from 'react';

import { Select as AndtSelect, SelectProps as AntdSelectProps, RefSelectProps } from 'antd';

import withForm, { WithFormProps } from '../Form/withForm';
import nestedComponent from '../utils/nestedComponent';

export interface SelectProps extends Omit<AntdSelectProps, 'onChange'>, WithFormProps<RefSelectProps> {}

const Select = React.forwardRef<RefSelectProps, SelectProps>(({ value, ...props }, ref) => {
  return <AndtSelect ref={ref} value={value} {...props} />;
});

export default nestedComponent(withForm(Select), {
  Option: AndtSelect.Option,
  OptGroup: AndtSelect.OptGroup
});
