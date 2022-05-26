import * as React from 'react';

import CheckboxRadio, { ICheckboxRadioProps } from '../internals/CheckboxRadio';

export interface IRadioProps extends ICheckboxRadioProps {}

const Radio: React.FC<IRadioProps> = props => {
  return <CheckboxRadio {...props} type='radio' />;
};

export default Radio;
