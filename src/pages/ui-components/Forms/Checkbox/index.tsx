import * as React from 'react';

import CheckboxRadio, { ICheckboxRadioProps } from '../internals/CheckboxRadio';

export interface ICheckboxProps extends ICheckboxRadioProps {}

const Checkbox: React.FC<ICheckboxProps> = props => {
  return <CheckboxRadio {...props} type='checkbox' />;
};

export default Checkbox;
