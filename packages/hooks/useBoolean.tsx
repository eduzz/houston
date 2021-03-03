import * as React from 'react';

export function useBoolean(initial: boolean = false) {
  const [value, setValue] = React.useState(initial);
  const toogleValue = React.useCallback(() => setValue(value => !value), []);

  return [value, toogleValue] as [boolean, typeof toogleValue];
}

export function useBooleanToFalse(initial: boolean = true) {
  const [value, setValue] = React.useState(initial);
  const toogleValue = React.useCallback(() => setValue(() => false), []);

  return [value, toogleValue] as [boolean, typeof toogleValue];
}

export function useBooleanToTrue(initial: boolean = false) {
  const [value, setValue] = React.useState(initial);
  const toogleValue = React.useCallback(() => setValue(() => true), []);

  return [value, toogleValue] as [boolean, typeof toogleValue];
}
