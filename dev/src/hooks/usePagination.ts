import { DependencyList, useCallback, useState } from 'react';
import { useRetryableObservable } from 'react-use-observable';

import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

export default function usePaginationObservable<P extends IPaginationParams, T>(
  observableGenerator: (params: P) => Observable<IPaginationResponse<T>>,
  initialParams: Partial<P>,
  deps: DependencyList
) {
  const [lastResult, setLastResult] = useState<IPaginationResponse<T>>(undefined);
  const [params, setParams] = useState<P>({
    orderDirection: 'asc',
    pageSize: 10,
    page: 0,
    ...initialParams
  } as P);

  const mergeParams = useCallback(
    (newParams: Partial<P>) => {
      setParams({ ...params, ...newParams });
    },
    [params]
  );

  const [data, error, completed, retry] = useRetryableObservable(() => {
    return of(true).pipe(
      delay(500),
      switchMap(() => observableGenerator(params)),
      tap(
        data => setLastResult(data),
        () => setLastResult(undefined)
      )
    );
  }, [params, ...deps]);

  return [
    params,
    mergeParams,
    data === undefined && error === undefined,
    data || lastResult,
    error,
    completed,
    retry
  ] as [
    typeof params,
    typeof mergeParams,
    boolean,
    IPaginationResponse<T>,
    typeof error,
    typeof completed,
    typeof retry
  ];
}
