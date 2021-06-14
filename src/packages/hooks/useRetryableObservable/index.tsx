import * as React from 'react';

import { BehaviorSubject, NEVER } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { getConfig } from '../config';
import useObservable, { observerFunction } from '../useObservable';

/**
 * Create a memoized observable and unsubscribe automatically if component unmount and a
 * retry function
 * @returns [observableValue, error, completed, retryFunction, loading]
 */
export default function useRetryableObservable<T>(
  observableGenerator: observerFunction<T>,
  deps: React.DependencyList
): [T | undefined, any, boolean, () => void, boolean, undefined] {
  const [data, setData] = React.useState<T | undefined>();
  const [error, setError] = React.useState();
  const doRetry$ = React.useRef(new BehaviorSubject<boolean>(true)).current;

  const [, , completed, loading] = useObservable(() => {
    return doRetry$.pipe(
      tap(() => {
        setData(undefined);
        setError(undefined);
      }),
      switchMap(() =>
        observableGenerator().pipe(
          tap(result => setData(result)),
          catchError(err => {
            getConfig().onUnhandledError(err, 'hooks');
            setError(err);
            return NEVER;
          })
        )
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const retry = React.useCallback(() => doRetry$.next(true), [doRetry$]);

  return [data, error, completed, retry, loading, undefined];
}
