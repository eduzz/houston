import CheckboxRadio, { CheckboxRadioProps } from '../_utils/CheckboxRadio';

export interface RadioProps extends Omit<CheckboxRadioProps, 'multiple' | 'value' | 'checked'> {
  value: any;
  checked?: boolean;
}

const Radio = (props: RadioProps) => {
  return <CheckboxRadio {...props} type='radio' />;
};

export default Radio;
