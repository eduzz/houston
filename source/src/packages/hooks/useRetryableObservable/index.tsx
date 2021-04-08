import * as React from 'react';

import { BehaviorSubject, NEVER } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import useObservable, { observerFunction } from '../useObservable';

/**
 * Create a memoized observable and unsubscribe automatically if component unmount and a
 * retry function
 * @returns [observableValue, error, isCompleted, retryFunction]
 */
export default function useRetryableObservable<T>(
  observableGenerator: observerFunction<T>,
  deps: React.DependencyList
): [T | undefined, any, boolean, () => void, undefined] {
  const [data, setData] = React.useState<T | undefined>();
  const [error, setError] = React.useState();
  const submitted$ = React.useRef(new BehaviorSubject<boolean>(true)).current;

  const [, , completed] = useObservable(() => {
    return submitted$.pipe(
      tap(() => setData(undefined)),
      tap(() => setError(undefined)),
      switchMap(() =>
        observableGenerator().pipe(
          tap(result => setData(result)),
          catchError(err => {
            setError(err);
            return NEVER;
          })
        )
      )
    );
  }, deps);

  const retry = React.useCallback(() => submitted$.next(true), [submitted$]);

  return [data, error, completed, retry, undefined];
}
