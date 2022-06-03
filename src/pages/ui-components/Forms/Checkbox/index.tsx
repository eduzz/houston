import * as React from 'react';

import CheckboxRadio, { ICheckboxRadioProps } from '../_utils/CheckboxRadio';

export interface ICheckboxProps extends ICheckboxRadioProps {}

const Checkbox: React.FC<ICheckboxProps> = props => {
  return <CheckboxRadio {...props} type='checkbox' />;
};

export default Checkbox;
