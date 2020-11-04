import * as React from 'react';

import cnpj from './cnpj';
import cpf from './cpf';
import document from './document';
import money from './money';
import phone from './phone';
import zipcode from './zipcode';

export interface IMaskFunction {
  apply(value: string | number): string;
  clean(value: string): string | number;
}

const maskHandlers = { zipcode, phone, document, cpf, cnpj, money };
export type Masks = keyof typeof maskHandlers;

export default function useMask(mask: Masks, value: any) {
  const { apply: maskApply, clean: maskClean } = React.useMemo(() => {
    let maskFunc = maskHandlers[mask];

    if (!maskFunc) {
      maskFunc = { apply: (v: string) => v, clean: v => v };
      mask && console.warn(`Mask '${mask}' not found`);
    }

    return maskFunc;
  }, [mask]);

  const maskedValue = React.useMemo(() => (maskApply ? maskApply(value) : value), [value, maskApply]);
  const cleanedValue = React.useMemo(() => (maskClean ? maskClean(value) : value), [value, maskClean]);

  return { maskApply, maskClean, maskedValue, cleanedValue };
}
