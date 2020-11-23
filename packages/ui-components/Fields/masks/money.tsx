import { IFormMask } from '../adapters';

const moneyMask: IFormMask = {
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

function padStart(string: string, length: number, chars: string) {
  const strLength = length ? string.length : 0;
  return strLength < length ? createPadding(length - strLength, chars) + string : string || '';
}

function createPadding(length: number, chars: string) {
  return new Array(length).fill(chars).join('');
}

export default moneyMask;
