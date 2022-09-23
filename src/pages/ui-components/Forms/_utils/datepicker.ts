import generateConfig from 'rc-picker/lib/generate/dateFns';
import locale from 'rc-picker/lib/locale/pt_BR';

export const defaultFormats = {
  date: 'dd/MM/yyyy',
  datetime: 'dd/MM/yyyy HH:mm',
  datetimeSeconds: 'dd/MM/yyyy HH:mm:ss',
  time: 'HH:mm',
  timeSeconds: 'HH:mm:ss'
} as const;

locale.ok = 'Confirmar';

const originalParse = generateConfig.locale.parse;

generateConfig.locale.parse = (locale, text, formats) => {
  // fix for https://github.com/date-fns/date-fns/issues/942
  if (!formats.some(format => text?.length === format.length)) {
    return null;
  }

  return originalParse(locale, text, formats);
};

export const pickerProps = {
  locale: { ...locale, ok: 'Confirmar' },
  generateConfig
};
