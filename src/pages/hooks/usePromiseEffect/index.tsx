import * as React from 'react';

import { getConfig } from '../config';

/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns undefined
 */
export default function usePromiseEffect<T>(
  promiseGenerator: (isSubscribed: () => boolean) => Promise<T>,
  deps: React.DependencyList
): void {
  React.useEffect(() => {
    let isSubscribed = true;

    promiseGenerator(() => isSubscribed).catch(err => {
      getConfig().onUnhandledError(err, 'hooks');
      throw err;
    });

    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
