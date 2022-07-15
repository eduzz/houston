import * as React from 'react';

import CheckboxRadio, { CheckboxRadioProps } from '../_utils/CheckboxRadio';

export interface CheckboxProps extends CheckboxRadioProps {}

const Checkbox: React.FC<CheckboxProps> = props => {
  return <CheckboxRadio {...props} type='checkbox' />;
};

export default Checkbox;
