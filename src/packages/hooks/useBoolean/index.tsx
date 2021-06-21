import * as React from 'react';

/**
 * Simplify the way to use a boolean state
 * @param initial A boolen of a function that return a  boolean
 * @returns [value, toogleValue, toTrue, toFalse]
 */
export default function useBoolean(
  initial?: boolean | (() => boolean)
): [boolean, () => void, () => void, () => void, undefined] {
  const [value, setValue] = React.useState(initial ?? false);
  const toogleValue = React.useCallback(() => setValue(value => !value), []);
  const toTrue = React.useCallback(() => setValue(() => true), []);
  const toFalse = React.useCallback(() => setValue(() => false), []);

  return [value, toogleValue, toTrue, toFalse, undefined];
}
