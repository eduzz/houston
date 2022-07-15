import CheckboxRadio, { CheckboxRadioProps } from '../_utils/CheckboxRadio';

export interface CheckboxProps extends CheckboxRadioProps {}

const Checkbox = (props: CheckboxProps) => {
  return <CheckboxRadio {...props} type='checkbox' />;
};

export default Checkbox;
