import * as React from 'react';

import maskMoney from '@eduzz/houston-forms/masks/money';

import Input, { InputProps } from '../Input';

export interface InputCurrencyProps
  extends Omit<InputProps<number>, 'mask' | 'multiline' | 'rows' | 'disableAutoResize'> {}

const InputCurrency: React.FC<InputCurrencyProps> = props => {
  return <Input {...props} mask={maskMoney} />;
};

export default InputCurrency;
