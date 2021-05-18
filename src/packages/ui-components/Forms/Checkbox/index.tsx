import * as React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import CheckboxRadioField, { ICheckboxBaseFieldProps } from '../internals/CheckBoxBase';

export interface ICheckboxFieldProps extends Omit<ICheckboxBaseFieldProps, 'Control'> {}

const CheckboxField = React.memo<ICheckboxFieldProps>(props => {
  return <CheckboxRadioField {...props} Control={Checkbox} />;
});

export default CheckboxField;
