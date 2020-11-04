import { IMaskFunction } from '.';
import cnpj from './cnpj';
import cpf from './cpf';

const document: IMaskFunction = {
  apply: (value: string) => {
    if (!value) return '';
    return value.length > 11 ? cnpj.apply(value) : cpf.apply(value);
  },
  clean: (value: string) => {
    if (!value) return '';
    return value.length > 11 ? cnpj.clean(value) : cpf.clean(value);
  }
};

export default document;
