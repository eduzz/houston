import * as React from 'react';
import { useCallback } from 'react';

import { getConfig } from '../config';

/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns [value, error, loading]
 */
export default function usePromise<T>(
  promiseGenerator: () => Promise<T>,
  deps: React.DependencyList
): [T, any, boolean, () => void, undefined] {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [result, setResult] = React.useState<T>();
  const [error, setError] = React.useState<any>();
  const [retry, setRetry] = React.useState<number>();

  React.useEffect(() => {
    let isSubscribed = true;
    setLoading(true);

    promiseGenerator()
      .then(result => {
        if (!isSubscribed) return;
        setResult(result);
      })
      .catch(err => {
        getConfig().onUnhandledError(err, 'hooks');

        if (!isSubscribed) return;
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retry, deps]);

  const onRetry = useCallback(() => setRetry(Date.now()), []);

  return [result, error, loading, onRetry, undefined];
}
