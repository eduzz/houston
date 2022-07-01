import * as React from 'react';

import { getConfig } from '../config';

/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns [value, error, loading]
 */
export default function usePromise<T>(
  promiseGenerator: (isSubscribed: () => boolean) => Promise<T>,
  deps: React.DependencyList
): [T, any, boolean] {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [result, setResult] = React.useState<T>();
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    let isSubscribed = true;
    setLoading(true);

    promiseGenerator(() => isSubscribed)
      .then(result => {
        if (!isSubscribed) return;
        setResult(() => result);
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
  }, deps);

  return [result, error, loading];
}
