import * as React from 'react';

import cnpjMask from './cnpj';
import cpfMask from './cpf';
import documentMask from './document';
import moneyMask from './money';
import phoneMask from './phone';
import zipcodeMask from './zipcode';

export interface MaskAdapter {
  apply(value: string | number | undefined | null): string | null | undefined;
  clean(value: string): string | number | null;
}

const buildInMasks = {
  cnpj: cnpjMask,
  cpf: cpfMask,
  document: documentMask,
  money: moneyMask,
  phone: phoneMask,
  zipcode: zipcodeMask
} as const;

export type BuildInMask = keyof typeof buildInMasks;

export default function useMask(mask: BuildInMask | MaskAdapter | undefined, value: any) {
  const { apply: maskApply, clean: maskClean } = React.useMemo<MaskAdapter>(() => {
    const maskFunction = typeof mask === 'string' ? buildInMasks[mask] : mask;
    return maskFunction ?? ({ apply: v => v, clean: v => v } as MaskAdapter);
  }, [mask]);

  const maskedValue = React.useMemo(() => (maskApply ? maskApply(value) : value), [value, maskApply]);
  const cleanedValue = React.useMemo(() => (maskClean ? maskClean(value) : value), [value, maskClean]);

  return { maskApply, maskClean, maskedValue, cleanedValue };
}
