import * as React from 'react';

import IFormMaskAdapter from '@eduzz/houston-core/maskAdapter';

export interface IMaskFunction {
  apply(value: string | number): string;
  clean(value: string): string | number;
}

export default function useMask(mask: IFormMaskAdapter, value: any) {
  const { apply: maskApply, clean: maskClean } = React.useMemo(() => {
    return mask ?? { apply: (v: string) => v, clean: (v: string) => v };
  }, [mask]);

  const maskedValue = React.useMemo(() => (maskApply ? maskApply(value) : value), [value, maskApply]);
  const cleanedValue = React.useMemo(() => (maskClean ? maskClean(value) : value), [value, maskClean]);

  return { maskApply, maskClean, maskedValue, cleanedValue };
}
