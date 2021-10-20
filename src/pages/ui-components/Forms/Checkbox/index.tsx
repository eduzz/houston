import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';

import CheckboxRadioField, { ICheckboxBaseFieldProps } from '../internals/CheckBoxBase';

export interface ICheckboxFieldProps extends Omit<ICheckboxBaseFieldProps, 'Control'> {}

const CheckboxField: React.FC<ICheckboxFieldProps> = props => {
  return <CheckboxRadioField {...props} Control={Checkbox} />;
};

export default CheckboxField;
