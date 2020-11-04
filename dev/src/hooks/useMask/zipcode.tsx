import { IMaskFunction } from '.';

const zipcode: IMaskFunction = {
  apply: (value: string) => {
    if (!value) return '';
    return value.replace(/^(\d{0,5})(\d{0,3}).*/, '$1-$2').replace(/-$/, '');
  },
  clean: (value: string) => (value || '').replace(/\D/gi, '').substr(0, 8)
};

export default zipcode;
