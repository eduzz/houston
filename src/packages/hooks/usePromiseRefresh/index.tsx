import * as React from 'react';
import { useCallback } from 'react';

import usePromise from '../usePromise';

/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns [value, error, loading, refresh]
 */
export default function usePromiseRefresh<T>(
  promiseGenerator: () => Promise<T>,
  deps: React.DependencyList
): [T, any, boolean, () => void] {
  const [refresh, setRefresh] = React.useState<number>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [data, error, loading] = usePromise(promiseGenerator, [refresh, ...deps]);

  const onRetry = useCallback(() => setRefresh(Date.now()), []);

  return [data, error, loading, onRetry];
}
