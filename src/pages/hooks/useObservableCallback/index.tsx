import * as React from 'react';

import { Observable, Subject, switchMap, tap } from 'rxjs';

import { getConfig } from '../config';

/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @param observableCallback Function to return a observable
 * @param deps List of deps
 * @returns [callbackFunction, observableValue, error, complete, loading]
 */
export default function useObservableCallback<T, F extends (...args: any[]) => Observable<T>>(
  observableCallback: F,
  deps: React.DependencyList
): [(...a: Parameters<F>) => void, T, any, boolean, boolean] {
  const [value, setValue] = React.useState<T>(undefined);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const [submitted$] = React.useState(
    () => new Subject<{ callback: F; args: Parameters<F>[]; deps: React.DependencyList }>()
  );

  React.useEffect(() => {
    const sub = submitted$
      .pipe(
        switchMap(({ callback, args }) => {
          setValue(undefined);
          setError(undefined);
          setCompleted(false);
          setLoading(true);

          return callback(...args);
        }),
        tap({
          next: (data: T) => {
            setValue(() => data);
            setError(undefined);
            setLoading(false);
          },
          error: err => {
            getConfig().onUnhandledError(err, 'hooks');
            setValue(null);
            setError(err);
            setLoading(false);
          },
          complete: () => {
            setCompleted(true);
            setLoading(false);
          }
        })
      )
      .subscribe();

    return () => sub.unsubscribe();
  }, [submitted$]);

  const callback = React.useCallback(
    (...args: Parameters<F>) => {
      setLoading(true);
      submitted$.next({ callback: observableCallback, args, deps });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );

  return [callback, value, error, completed, loading];
}
