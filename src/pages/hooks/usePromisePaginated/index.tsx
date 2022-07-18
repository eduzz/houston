import * as React from 'react';

import { getConfig } from '../config';
import usePromiseEffect from '../usePromiseEffect';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const isEqual = require('lodash/isEqual');

export interface PaginationParams {
  [key: string]: any;
  page: number;
  perPage: number;
  sort?: {
    field: string;
    direction: 'asc' | 'desc';
  };
}

export interface PaginationResponse<T> {
  total: number;
  result: T[];
}

interface DataState<T> extends PaginationResponse<T> {
  hasMore: boolean;
}

export type PaginationMergeParams<P> =
  | Partial<P & { _refresh?: number }>
  | ((currenteParams: Partial<P & { _refresh?: number }>) => Partial<P & { _refresh?: number }>);

export interface UsePaginatedOptions<P, T> {
  initialParams?: P;
  /** set if the date will be cumulative or not */
  infintyScroll?: boolean;
  onChangeParams: (params: P, isSubscribed: () => boolean) => Promise<PaginationResponse<T>>;
}

export interface IUsePromisePaginated<P, R> {
  params: P;
  initialParams: Partial<P>;
  isLoading: boolean;
  isLoadingMore: boolean;
  total: number;
  result: R[];
  hasMore: boolean;
  error: any;
  refresh: () => void;
  mergeParams: (params: PaginationMergeParams<P>, reset?: boolean) => void;
  /** Sintax sugar for `mergeParams` to change page  */
  handleChangePage: (page: number) => void;
  /** Sintax sugar for `mergeParams` to change perPage  */
  handleChangePerPage: (perPage: number) => void;
  /** Sintax sugar for `mergeParams` to change the sort  */
  handleSort: (sort: PaginationParams['sort']) => void;
}

/**
 * Hooks to simplify the use of an observable paginated
 * @param options `UsePaginatedOptions`
 * @param deps React deps
 * @returns `IUsePaginatedPromise`
 */
export default function usePromisePaginated<P extends PaginationParams, R>(
  options: UsePaginatedOptions<P, R>,
  deps: React.DependencyList
): IUsePromisePaginated<P, R> {
  const { infintyScroll, initialParams: initialParamsOption, onChangeParams } = options;

  const [data, setData] = React.useState<DataState<R>>({ total: 0, result: [], hasMore: true });
  const [error, setError] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const [initialParams] = React.useState<P>(
    () =>
      ({
        page: getConfig()?.pagination?.pageStart ?? 1,
        perPage: getConfig()?.pagination?.perPage ?? 25,
        ...(initialParamsOption ?? {})
      } as P)
  );
  const [params, setParams] = React.useState<P>(() => ({ ...initialParams }));

  const mergeParams = React.useCallback(
    (newParams: PaginationMergeParams<P>, reset?: boolean) => {
      setParams(params => {
        if (typeof newParams === 'function') {
          newParams = newParams(params);
        }

        if ((newParams.page ?? 0) > params.page && (!data.hasMore || isLoading || isLoadingMore)) {
          newParams.page = params.page;
        }

        const newState = { ...(reset ? initialParams : params), ...newParams } as P;
        if (isEqual(newState, params)) {
          return params;
        }

        return { ...newState, _refresh: null };
      });
    },
    [data.hasMore, initialParams, isLoading, isLoadingMore]
  );

  usePromiseEffect(
    async isSubscribed => {
      try {
        setIsLoading(!infintyScroll || params.page === initialParams.page);
        setIsLoadingMore(params.page !== initialParams.page);

        const sendParams = { ...params } as P & { _refresh?: number };
        delete sendParams._refresh;
        const response = await onChangeParams(sendParams, isSubscribed);

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
      } catch (err) {
        getConfig().onUnhandledError(err, 'hooks');
        setIsLoading(false);
        setIsLoadingMore(false);
        setError(err);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params, ...deps]
  );

  const refresh = React.useCallback(() => {
    setIsLoading(true);
    mergeParams({ page: getConfig()?.pagination?.pageStart ?? 1, _refresh: Date.now() } as any);
  }, [mergeParams]);

  const handleChangePage = React.useCallback((page: number) => mergeParams({ page } as P), [mergeParams]);
  const handleChangePerPage = React.useCallback((perPage: number) => mergeParams({ perPage } as P), [mergeParams]);
  const handleSort = React.useCallback(
    (sort: PaginationParams['sort']) => mergeParams({ sort, page: initialParams.page } as P),
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
    refresh,
    mergeParams,
    handleSort,
    handleChangePage,
    handleChangePerPage
  };
}
