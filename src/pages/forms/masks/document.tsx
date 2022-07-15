import FormMaskAdapter from '@eduzz/houston-core/maskAdapter';

import cnpjMask from './cnpj';
import cpfMask from './cpf';

const documentMask: FormMaskAdapter = {
  apply: (value: string) => {
    if (!value) return '';
    return value.length > 11 ? cnpjMask.apply(value) : cpfMask.apply(value);
  },
  clean: (value: string) => {
    if (!value) return '';
    return value.length > 11 ? cnpjMask.clean(value) : cpfMask.clean(value);
  }
};

export default documentMask;
