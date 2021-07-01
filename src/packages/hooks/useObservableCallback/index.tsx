import * as React from 'react';

import { NEVER, Observable, Subject } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { getConfig } from '../config';
import useObservable from '../useObservable';

type ExtractObservableResult<P> = P extends Observable<infer T> ? T : never;

/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @param observableGenerator Function to return a observable
 * @param deps List of deps
 * @returns [callbackFunction, observableValue, error, complete, loading]
 */
export default function useObservableCallback<T, F extends (...args: any[]) => Observable<T>>(
  observableGenerator: F,
  deps: React.DependencyList
): [(...a: Parameters<F>) => void, ExtractObservableResult<ReturnType<F>>, any, boolean, boolean] {
  const [error, setError] = React.useState();
  const submitted$ = React.useRef(new Subject<any>()).current;

  const [data, , completed, loading] = useObservable<any>(() => {
    return submitted$.pipe(
      tap(() => setError(undefined)),
      switchMap(args =>
        observableGenerator(...args).pipe(
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

  const callback = React.useCallback((...args: Parameters<F>) => submitted$.next(args), [submitted$]);

  return [callback, data, error, completed, loading];
}
