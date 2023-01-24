import { MaskAdapter } from '.';

const dateMask: MaskAdapter = {
  apply: (value: string) => {
    if (!value) return '';
    return value
      .replace(/\D/gi, '')
      .replace(/^(\d{0,2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3')
      .trim()
      .replace(/\/$/gi, '')
      .replace(/\/$/gi, '');
  },
  clean: (value: string) => (value || '').replace(/\D/gi, '').substring(0, 8)
};

export default dateMask;
