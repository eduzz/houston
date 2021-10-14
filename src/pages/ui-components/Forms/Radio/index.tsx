import * as React from 'react';

import Radio from '@mui/material/Radio';

import BaseRadioField, { IRadioBaseFieldProps } from '../internals/RadioBase';

export interface IRadioFieldProps extends Omit<IRadioBaseFieldProps, 'Control' | 'isMultiple'> {}

const RadioField: React.FC<IRadioFieldProps> = props => {
  return <BaseRadioField {...props} Control={Radio} />;
};

export default RadioField;
