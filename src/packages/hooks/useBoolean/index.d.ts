/**
 * Simplify the way to use a boolean state
 * @param initial A boolen of a function that return a  boolean
 * @returns [value, toogleValue, toTrue, toFalse]
 */
export default function useBoolean(initial?: boolean | (() => boolean)): [boolean, () => void, () => void, () => void];
