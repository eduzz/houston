import * as React from 'react';

import { getConfig } from '../config';

type ExtractPromiseValue<P> = P extends Promise<infer T> ? T : never;

/**
 * Return a callback, the promise value and unsubscribed if component unmount
 * @param promiseCallback
 * @param deps
 * @returns [function, value, error, loading]
 */
export default function usePromiseCallback<T, F extends (...args: any[]) => Promise<T>>(
  promiseCallback: F,
  deps: React.DependencyList
): [(...a: Parameters<F>) => Promise<T>, ExtractPromiseValue<ReturnType<F>>, any, boolean] {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<ExtractPromiseValue<ReturnType<F>>>();
  const [error, setError] = React.useState<any>();

  const callback = React.useCallback((...args: Parameters<F>) => {
    const isSubscribed = true;
    setLoading(true);
    setResult(undefined);
    setError(undefined);

    const promise = promiseCallback(...args);

    promise
      .then((result: ExtractPromiseValue<ReturnType<F>>) => {
        if (!isSubscribed) return;
        setResult(() => result);
      })
      .catch(err => {
        getConfig().onUnhandledError(err, 'hooks');

        if (!isSubscribed) return;
        setError(err);
      })
      .finally(() => setLoading(false));

    return promise;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [callback, result, error, loading];
}
