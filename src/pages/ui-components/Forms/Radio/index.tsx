import * as React from 'react';

import CheckboxRadio, { ICheckboxRadioProps } from '../_utils/CheckboxRadio';

export interface IRadioProps extends Omit<ICheckboxRadioProps, 'multiple' | 'value' | 'checked'> {
  value: any;
  checked?: boolean;
}

const Radio: React.FC<IRadioProps> = props => {
  return <CheckboxRadio {...props} type='radio' />;
};

export default Radio;
