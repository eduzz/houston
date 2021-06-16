import * as React from 'react';

import { Observable, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

import useObservable from '../useObservable';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const isEqual = require('lodash/isEqual');

export interface IPaginationParams {
  page: number;
  perPage: number;
  [key: string]: any;
}

export interface IPaginationResponse<T> {
  total: number;
  result: T[];
}

interface IDataState<T> extends IPaginationResponse<T> {
  hasMore: boolean;
}

export default function usePaginatedObservable<P extends IPaginationParams, T>(
  observableGenerator: (params: P) => Observable<IPaginationResponse<T>>,
  initialParams: Partial<P>,
  deps: React.DependencyList
) {
  const [data, setData] = React.useState<IDataState<T>>({ total: 0, result: [], hasMore: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const [params, setParams] = React.useState<P>({ page: 0, perPage: 30, ...initialParams } as P);
  const mergeParams = React.useCallback(
    (newParams: Partial<P & { _retry?: number }>, reset = false) => {
      setParams(params => {
        if (newParams.page > params.page && (!data.hasMore || isLoading || isLoadingMore)) {
          newParams.page = params.page;
        }

        const newState = { ...(reset ? initialParams : params), ...newParams } as P;
        if (isEqual(newState, params)) {
          return params;
        }

        return { ...newState, _retry: null };
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.hasMore, isLoading, isLoadingMore]
  );

  const [, error] = useObservable(() => {
    return of(true).pipe(
      tap(() => (params.page === 0 ? setIsLoading(true) : setIsLoadingMore(true))),
      delay(1000),
      switchMap(() => {
        const sendParams = { ...params } as P & { _retry?: number };
        delete sendParams._retry;
        return observableGenerator(sendParams);
      }),
      tap({
        next: response => {
          setIsLoading(false);
          setIsLoadingMore(false);

          setData(data => {
            const total = response.total ?? data.total;
            const result = (params.page === 0 ? response.result : [...data.result, ...response.result]) ?? [];

            return { total, result, hasMore: result.length < total };
          });
        },
        error: () => {
          setIsLoading(false);
          setIsLoadingMore(false);
        }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, ...deps]);

  const retry = React.useCallback(() => {
    setIsLoading(true);
    mergeParams({ page: 0, _retry: Date.now() } as any);
  }, [mergeParams]);

  return {
    params,
    mergeParams,
    initialParams,
    isLoading,
    isLoadingMore,
    total: data.total,
    result: data.result,
    hasMore: data.hasMore,
    error,
    retry
  };
}
