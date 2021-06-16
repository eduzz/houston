import * as React from 'react';

/**
 * @param Simplify the way to use a boolean state
 * @returns [value, toogleValue, toTrue, toFalse]
 */
export default function useBoolean(initial = false): [boolean, () => void, () => void, () => void, undefined] {
  const [value, setValue] = React.useState(initial);
  const toogleValue = React.useCallback(() => setValue(value => !value), []);
  const toTrue = React.useCallback(() => setValue(() => true), []);
  const toFalse = React.useCallback(() => setValue(() => false), []);

  return [value, toogleValue, toTrue, toFalse, undefined];
}
