import maskMoney from '@eduzz/houston-forms/masks/money';

import Input, { InputProps } from '../Input';

export interface InputCurrencyProps
  extends Omit<InputProps<number>, 'mask' | 'multiline' | 'rows' | 'disableAutoResize'> {}

const InputCurrency = (props: InputCurrencyProps) => {
  return <Input {...props} mask={maskMoney} />;
};

export default InputCurrency;
