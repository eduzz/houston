import padStart from 'lodash/padStart';

import { IMaskFunction } from '.';

const money: IMaskFunction = {
  apply: (value: number | string) => {
    if (value === null || value === undefined || value === '') return '';
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value) || 0);
  },
  clean: value => {
    value = (value || '').toString().replace(/[^\d,]/gi, '');

    if (!value.includes(',')) {
      value = '0,' + padStart(value, 2, '0');
    }

    const [, cents] = value.split(',');
    if (cents && cents.length !== 2) {
      value = value
        .replace(',', '')
        .replace(/(\d+)?(\d{2})/gi, '$1,$2')
        .replace(/^,/gi, '0,');
    }

    return parseFloat(value.replace(/\./gi, '').replace(',', '.'));
  }
};

export default money;
