import * as React from 'react';

import Radio from '@material-ui/core/Radio';

import CheckboxRadioField, { ICheckboxRadioFieldProps } from './internals/CheckRadioBase';

export interface IRadioFieldProps extends Omit<ICheckboxRadioFieldProps, 'Control' | 'isMultiple'> {}

const RadioField = React.memo<IRadioFieldProps>(props => {
  return <CheckboxRadioField {...props} Control={Radio} isMultiple={false} />;
});

export default RadioField;
