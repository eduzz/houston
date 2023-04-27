import { useCallback } from 'react';

import { Result, Empty, Button } from 'antd';
import type { TableProps } from 'antd';

import { PaginationParams } from '../pagination';
import { UsePromisePaginated } from '../usePromisePaginated';
import { UseQueryPaginatedResult } from '../useQueryPaginated';

export default function useAntdTrableProps<P extends PaginationParams, R>({
  mergeParams,
  params,
  isLoading,
  refresh,
  ...rest
}: UseQueryPaginatedResult<P, R> | UsePromisePaginated<P, R>) {
  const queryData = rest as UseQueryPaginatedResult<P, R>;
  const promiseData = rest as UsePromisePaginated<P, R>;

  const isError = queryData.isError ?? !!promiseData.error;
  const result = queryData.data?.result ?? promiseData.result ?? [];
  const total = queryData.data?.total ?? promiseData.total ?? 0;

  const handleAntdChange = useCallback<NonNullable<TableProps<R>['onChange']>>(
    (pagination, filters, sorter) => {
      const sort = Array.isArray(sorter) ? sorter[0] : sorter;

      mergeParams(
        current =>
          ({
            filters,
            page: pagination.current ?? current.page,
            perPage: pagination.pageSize ?? current.perPage,
            sortField: sort.field,
            sortDirection: sort.order === 'ascend' ? 'asc' : sort.order === 'descend' ? 'desc' : undefined
          } as Partial<P>)
      );
    },
    [mergeParams]
  );

  return {
    loading: isLoading,
    rowKey: 'id',
    onChange: handleAntdChange,
    dataSource: result,
    showSorterTooltip: true,
    pagination: {
      disabled: isLoading,
      responsive: true,
      pageSize: params.perPage,
      current: params.page,
      showSizeChanger: true,
      total
    },
    locale: {
      emptyText: isError ? (
        <>
          <Result
            status={500}
            title='Um problema aconteceu'
            extra={
              <Button type='default' onClick={refresh}>
                Tentar Novamente
              </Button>
            }
          />
        </>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )
    }
  };
}
