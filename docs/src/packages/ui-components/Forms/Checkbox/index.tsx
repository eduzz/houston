import * as React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import CheckboxRadioField, { ICheckboxRadioFieldProps } from '../internals/CheckRadioBase';

export interface ICheckboxFieldProps extends Omit<ICheckboxRadioFieldProps, 'Control'> {}

const CheckboxField = React.memo<ICheckboxFieldProps>(props => {
  return <CheckboxRadioField {...props} Control={Checkbox} />;
});

export default CheckboxField;
