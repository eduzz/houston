import * as React from 'react';

import Radio from '@material-ui/core/Radio';

import BaseRadioField, { IRadioBaseFieldProps } from '../internals/RadioBase';

export interface IRadioFieldProps extends Omit<IRadioBaseFieldProps, 'Control' | 'isMultiple'> {}

const RadioField = React.memo<IRadioFieldProps>(props => {
  return <BaseRadioField {...props} Control={Radio} />;
});

export default RadioField;
