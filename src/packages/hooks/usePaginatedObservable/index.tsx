import * as React from 'react';

import { Observable, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

import useObservable from '../useObservable';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const isEqual = require('lodash/isEqual');

export interface IPaginationParams {
  page: number;
  perPage: number;
  sort?: {
    field: string;
    direction: 'asc' | 'desc';
  };
  [key: string]: any;
}

export interface IPaginationResponse<T> {
  total: number;
  result: T[];
}

interface IDataState<T> extends IPaginationResponse<T> {
  hasMore: boolean;
}

export type PaginationMergeParams<P> =
  | Partial<P & { _retry?: number }>
  | ((currenteParams: Partial<P & { _retry?: number }>) => Partial<P & { _retry?: number }>);

export interface IUsePaginatedOptions<P, T> {
  initialParams?: P;
  /** set if the date will be cumulative or not */
  infintyScroll?: boolean;
  onChangeParams: (params: P) => Observable<IPaginationResponse<T>>;
}

export interface IUsePaginatedObservable<P, R> {
  params: P;
  initialParams: Partial<P>;
  isLoading: boolean;
  isLoadingMore: boolean;
  total: number;
  result: R[];
  hasMore: boolean;
  error: any;
  retry: () => void;
  mergeParams: (params: PaginationMergeParams<P>) => void;
  /** Sintax sugar for `mergeParams` to change page  */
  handleChangePage: (page: number) => void;
  /** Sintax sugar for `mergeParams` to change perPage  */
  handleChangePerPage: (perPage: number) => void;
  /** Sintax sugar for `mergeParams` to change the sort  */
  handleSort: (sort: IPaginationParams['sort']) => void;
}

/**
 * Hooks to simplify the use of an observable paginated
 * @param params Function that return a observable, receive the params as args
 * @param deps React deps
 * @returns `IUsePaginatedObservable`
 */
export default function usePaginatedObservable<P extends IPaginationParams, T>(
  options: IUsePaginatedOptions<P, T>,
  deps: React.DependencyList
): IUsePaginatedObservable<P, T> {
  const { infintyScroll, initialParams: initialParamsOption, onChangeParams } = options;

  const [data, setData] = React.useState<IDataState<T>>({ total: 0, result: [], hasMore: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const [initialParams] = React.useState<P>(() => ({ page: 1, perPage: 25, ...(initialParamsOption ?? {}) } as P));
  const [params, setParams] = React.useState<P>(() => ({ ...initialParams }));

  const mergeParams = React.useCallback(
    (newParams: PaginationMergeParams<P>, reset?: boolean) => {
      setParams(params => {
        if (typeof newParams === 'function') {
          newParams = newParams(params);
        }

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
    [data.hasMore, initialParams, isLoading, isLoadingMore]
  );

  const [, error] = useObservable(() => {
    return of(true).pipe(
      tap(() => {
        setIsLoading(!infintyScroll || params.page === initialParams.page);
        setIsLoadingMore(params.page !== initialParams.page);
      }),
      delay(300),
      switchMap(() => {
        const sendParams = { ...params } as P & { _retry?: number };
        delete sendParams._retry;
        return onChangeParams(sendParams);
      }),
      tap({
        next: response => {
          setIsLoading(false);
          setIsLoadingMore(false);

          setData(data => {
            const total = response.total ?? data.total;
            const result =
              (params.page === initialParams.page || !infintyScroll
                ? response.result
                : [...data.result, ...response.result]) ?? [];

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

  const handleChangePage = React.useCallback((page: number) => mergeParams({ page } as P), [mergeParams]);
  const handleChangePerPage = React.useCallback((perPage: number) => mergeParams({ perPage } as P), [mergeParams]);
  const handleSort = React.useCallback(
    (sort: IPaginationParams['sort']) => mergeParams({ sort, page: initialParams.page } as P),
    [initialParams.page, mergeParams]
  );

  return {
    params,
    initialParams,
    isLoading,
    isLoadingMore,
    total: data.total,
    result: data.result,
    hasMore: data.hasMore,
    error,
    retry,
    mergeParams,
    handleSort,
    handleChangePage,
    handleChangePerPage
  };
}
