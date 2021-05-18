import * as React from 'react';

import { Observable } from 'rxjs';

import { getConfig } from '../config';

export type observerFunction<T> = () => Observable<T>;

/**
 * Create a memoized observable and unsubscribe automatically if component unmount
 * @returns [observableValue, error, isCompleted]
 */
export default function useObservable<T>(
  observableGenerator: observerFunction<T>,
  deps: React.DependencyList,
  defaultValue: T | null = null
): [T | null, any, boolean, undefined] {
  const [value, setValue] = React.useState<T | null>(null);
  const [error, setError] = React.useState();
  const [complete, setComplete] = React.useState<boolean>(false);

  const defaultValueRef = React.useRef(defaultValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cb = React.useCallback(observableGenerator, deps);

  React.useEffect(() => {
    setValue(defaultValueRef.current || null);
    setError(undefined);
    setComplete(false);

    defaultValueRef.current = null;

    const sub = cb().subscribe({
      next: (data: T) => {
        setValue(data);
        setError(undefined);
      },
      error: err => {
        getConfig().onUnhandledError(err, 'hooks');
        setValue(null);
        setError(err);
      },
      complete: () => setComplete(true)
    });
    return () => sub.unsubscribe();
  }, [cb, defaultValue]);

  return [value, error, complete, undefined];
}
