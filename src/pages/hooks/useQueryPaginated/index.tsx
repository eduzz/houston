import * as React from 'react';

import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';

import { PaginationParams, PaginationResponse } from '../pagination';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const isEqual = require('lodash/isEqual');

export type PaginationMergeParams<P> =
  | Partial<P & { _refresh?: number }>
  | ((currenteParams: Partial<P>) => Partial<P>);

export interface UseQueryPaginatedOptions<P extends PaginationParams, R = unknown>
  extends Omit<UseQueryOptions<PaginationResponse<R>>, 'queryFn'> {
  initialParams?: P;
  queryFn: (params: P) => Promise<PaginationResponse<R>>;
}

export type UseQueryPaginatedResult<P extends PaginationParams = PaginationParams, R = unknown> = {
  params: P;
  initialParams: Partial<P>;
  refresh: () => void;
  mergeParams: (params: PaginationMergeParams<P>, reset?: boolean) => void;
  /** Sintax sugar for `mergeParams` to change page  */
  handleChangePage: (page: number) => void;
  /** Sintax sugar for `mergeParams` to change perPage  */
  handleChangePerPage: (perPage: number) => void;
  /** Sintax sugar for `mergeParams` to change the sort  */
  handleSort: (sortField: string, sortDirection: 'asc' | 'desc') => void;
} & UseQueryResult<PaginationResponse<R>>;

/**
 * Hooks to simplify the use of an observable paginated
 * @param options `UseQueryPaginatedOptions`
 * @param deps React deps
 * @returns `UseQueryPaginatedPromise`
 */
export default function useQueryPaginated<P extends PaginationParams, R>(
  options: UseQueryPaginatedOptions<P, R>
): UseQueryPaginatedResult<P, R> {
  const { initialParams: initialParamsOption, queryFn, ...queryOptions } = options;
  const [initialParams] = React.useState<P>(
    () =>
      ({
        page: 1,
        perPage: 10,
        ...(initialParamsOption ?? {})
      } as P)
  );
  const [params, setParams] = React.useState<P>(() => ({ ...initialParams }));
  const result = useQuery({
    ...queryOptions,
    queryFn: async () => {
      const sendParams = { ...params } as P & { _refresh?: number };
      delete sendParams._refresh;
      return await queryFn(sendParams);
    }
  });

  const mergeParams = React.useCallback(
    (newParams: PaginationMergeParams<P>, reset?: boolean) => {
      setParams(params => {
        if (typeof newParams === 'function') {
          newParams = newParams(params);
        }

        if ((newParams.page ?? 0) > params.page) {
          newParams.page = params.page;
        }

        const newState = { ...(reset ? initialParams : params), ...newParams } as P;

        if (isEqual(newState, params)) {
          return params;
        }

        return { ...newState, _refresh: null };
      });
    },
    [initialParams]
  );

  const refresh = React.useCallback(() => {
    mergeParams({ _refresh: Date.now() } as any);
  }, [mergeParams]);

  const handleChangePage = React.useCallback((page: number) => mergeParams({ page } as P), [mergeParams]);
  const handleChangePerPage = React.useCallback((perPage: number) => mergeParams({ perPage } as P), [mergeParams]);

  const handleSort = React.useCallback(
    (sortField: string | undefined | null, sortDirection?: 'asc' | 'desc') =>
      mergeParams({ sortField, sortDirection, page: initialParams.page } as P),
    [initialParams.page, mergeParams]
  );

  return {
    ...result,
    initialParams,
    refresh,
    params,
    mergeParams,
    handleSort,
    handleChangePage,
    handleChangePerPage
  };
}
