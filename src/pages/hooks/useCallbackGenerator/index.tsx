import * as React from 'react';

interface Cache<F extends (...args: any[]) => any> {
  [key: string]: {
    args: ParametersOptional<F>;
    func: () => ReturnType<F>;
  };
}

type ParametersOptional<T extends (...args: any) => any> = T extends (...args: infer P) => any ? Partial<P> : never;

/**
 * Function to generate a curried functions
 * @param generator function that will receive the args
 * @param deps
 * @returns Function generator
 */
export default function useCallbackGenerator<F extends (...args: any[]) => any>(
  generator: F,
  deps: React.DependencyList
): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F> {
  const [cache] = React.useState<Cache<F>>(() => ({}));

  /**
   * Function generator
   * @param key: unique key for cahce
   * @param args: args curried to the generator function
   */
  const result = React.useCallback((key: string, ...args: ParametersOptional<F>) => {
    if (!cache[key]) {
      cache[key] = { args, func: (...callArgs: any[]) => generator(...args, ...callArgs) };
    }

    return cache[key].func;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    Object.keys(cache).forEach(key => {
      cache[key].func = (...callArgs: any[]) => generator(...cache[key].args, ...callArgs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return result;
}
