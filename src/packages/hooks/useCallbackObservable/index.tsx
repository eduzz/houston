import * as React from 'react';

import { NEVER, Observable, Subject } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import useObservable from '../useObservable';

/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @returns a memoized version of the callback that only changes if one of the inputs has changed
 */
export default function useCallbackObservable<T>(
  observableGenerator: (...args: any[]) => Observable<T>,
  deps: React.DependencyList
): [() => void, T | undefined, any, boolean, undefined] {
  const [error, setError] = React.useState();
  const submitted$ = React.useRef(new Subject<any>()).current;

  const [data, , completed] = useObservable(() => {
    return submitted$.pipe(
      tap(() => setError(undefined)),
      switchMap(args =>
        observableGenerator(...args).pipe(
          catchError(err => {
            setError(err);
            return NEVER;
          })
        )
      )
    );
  }, deps);

  const callback = React.useCallback((...args: any[]) => submitted$.next(args), [submitted$]);

  return [callback, data, error, completed, undefined];
}
