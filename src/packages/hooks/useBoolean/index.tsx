import * as React from 'react';

export default function useBoolean(initial = false) {
  const [value, setValue] = React.useState(initial);
  const toogleValue = React.useCallback(() => setValue(value => !value), []);
  const toTrue = React.useCallback(() => setValue(() => true), []);
  const toFalse = React.useCallback(() => setValue(() => false), []);

  return [value, toogleValue, toTrue, toFalse];
}
