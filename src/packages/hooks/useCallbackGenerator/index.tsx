import * as React from 'react';

interface ICache<F extends (...args: any[]) => any> {
  [key: string]: {
    args: Parameters<F>;
    func: () => ReturnType<F>;
  };
}

type ParametersOptional<T extends (...args: any) => any> = T extends (...args: infer P) => any ? Partial<P> : never;

export default function useCallbackGenerator<F extends (...args: any[]) => any>(
  generator: F,
  deps: React.DependencyList
): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F> {
  const [cache] = React.useState<ICache<F>>(() => ({}));

  const result = React.useCallback((key: string, ...args: Parameters<F>) => {
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
  }, [deps]);

  return result;
}
