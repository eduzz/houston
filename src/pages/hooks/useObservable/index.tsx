import * as React from 'react';

import { Observable } from 'rxjs';

import { getConfig } from '../config';

/**
 * Create a memoized observable and unsubscribe automatically if component unmount, first value will be undefined
 * @param observableGenerator Function to return a observable
 * @param deps List of deps
 * @returns [observableValue, error, complete, loading]
 */
export default function useObservable<T>(
  observableGenerator: () => Observable<T>,
  deps: React.DependencyList
): [T | undefined, any | undefined, boolean, boolean] {
  const [value, setValue] = React.useState<T | undefined>(undefined);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [complete, setComplete] = React.useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cb = React.useCallback(observableGenerator, deps);

  React.useEffect(() => {
    setValue(undefined);
    setError(undefined);
    setComplete(false);
    setLoading(true);

    const sub = cb().subscribe({
      next: (data: T) => {
        setValue(() => data);
        setError(undefined);
        setLoading(false);
      },
      error: err => {
        getConfig().onUnhandledError(err, 'hooks');
        setValue(undefined);
        setError(err);
        setLoading(false);
      },
      complete: () => {
        setComplete(true);
        setLoading(false);
      }
    });
    return () => sub.unsubscribe();
  }, [cb]);

  return [value, error, complete, loading];
}
