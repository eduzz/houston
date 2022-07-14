import * as React from 'react';

import { getConfig } from '../config';

type OmitIsSubscribedArg<F> = F extends (s: any, ...args: infer P) => infer R ? (...args: P) => R : never;

let callCounter = 0;

/**
 * Return a callback, the promise value and unsubscribed if component unmount
 * @param promiseCallback
 * @param deps
 * @returns function
 */
export default function usePromiseCallback<F extends (isSubscribed: () => boolean, ...args: any[]) => Promise<any>>(
  promiseCallback: F,
  deps: React.DependencyList
): (...a: Parameters<OmitIsSubscribedArg<F>>) => ReturnType<F> {
  const isMounted = React.useRef(true);
  const lastCall = React.useRef<number>();

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return React.useCallback<any>((...args: Parameters<OmitIsSubscribedArg<F>>) => {
    const currentCall = ++callCounter;
    lastCall.current = currentCall;

    const promise = promiseCallback(() => {
      return isMounted.current && lastCall.current === currentCall;
    }, ...args);
    promise.catch(err => {
      getConfig().onUnhandledError(err, 'hooks');
      throw err;
    });

    return promise;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
