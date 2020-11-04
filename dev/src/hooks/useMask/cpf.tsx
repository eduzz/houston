import { IMaskFunction } from '.';

const cpf: IMaskFunction = {
  apply: (value: string) => {
    if (!value) return '';

    const regexp = /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/;
    const result = '$1.$2.$3-$4';

    return value
      .replace(regexp, result)
      .replace(/[-.\\]$/, '')
      .replace(/[-.\\]$/, '')
      .replace(/[-.\\]$/, '');
  },
  clean: (value: string) => (value || '').replace(/\D/gi, '').substr(0, 11)
};

export default cpf;
