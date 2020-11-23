import * as React from 'react';

import { IFormMask } from '../Fields/adapters';

export interface IMaskFunction {
  apply(value: string | number): string;
  clean(value: string): string | number;
}

export default function useMask(mask: IFormMask, value: any) {
  const { apply: maskApply, clean: maskClean } = React.useMemo(() => {
    return mask ?? { apply: (v: string) => v, clean: (v: string) => v };
  }, [mask]);

  const maskedValue = React.useMemo(() => (maskApply ? maskApply(value) : value), [value, maskApply]);
  const cleanedValue = React.useMemo(() => (maskClean ? maskClean(value) : value), [value, maskClean]);

  return { maskApply, maskClean, maskedValue, cleanedValue };
}
