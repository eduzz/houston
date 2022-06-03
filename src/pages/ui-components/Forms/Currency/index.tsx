import * as React from 'react';

import maskMoney from '@eduzz/houston-forms/masks/money';

import Input, { IInputProps } from '../Input';

export interface IInputCurrencyProps
  extends Omit<IInputProps<number>, 'mask' | 'multiline' | 'rows' | 'disableAutoResize'> {}

const InputCurrency: React.FC<IInputCurrencyProps> = props => {
  return <Input {...props} mask={maskMoney} />;
};

export default InputCurrency;
