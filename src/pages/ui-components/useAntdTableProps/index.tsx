import { useCallback } from 'react';

import { EllipsisOutlined } from '@ant-design/icons';
import { Result, Empty, Button, Dropdown, Tooltip } from 'antd';
import type { TableProps, TableColumnType } from 'antd';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';

import { UseQueryResult } from '@tanstack/react-query';

import { PaginationParams } from '@eduzz/houston-hooks/pagination';
import { UsePromisePaginated } from '@eduzz/houston-hooks/usePromisePaginated';
import { UseQueryPaginatedResult } from '@eduzz/houston-hooks/useQueryPaginated';

export type UseAntTableAction<R> = Array<Omit<MenuItemType, 'onClick'> & { onClick: (item: R) => void }>;

export type UseAntdTableProps<R> = {
  minWidth?: number;
  columns?: TableColumnType<R>[];
  actions?: UseAntTableAction<R> | ((item: R) => UseAntTableAction<R>);
};

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function useAntdTableProps<P extends PaginationParams, R>(
  data: UseQueryResult<Array<R>> | UseQueryPaginatedResult<P, R> | UsePromisePaginated<P, R>,
  { minWidth, columns, actions }: UseAntdTableProps<R>
): TableProps<R> {
  const queryData = data as Partial<UseQueryResult<Array<R>>>;
  const queryPaginatedData = data as Partial<UseQueryPaginatedResult<P, R>>;
  const promiseData = data as Partial<UsePromisePaginated<P, R>>;

  const isError = queryPaginatedData.isError ?? !!promiseData.error;
  const result = queryPaginatedData.data?.result ?? promiseData.result ?? queryData.data ?? [];
  const total = queryPaginatedData.data?.total ?? promiseData.total;
  const refresh = queryPaginatedData.refetch ?? promiseData.refresh ?? queryData.refetch;
  const isLoading = queryPaginatedData.isFetching ?? promiseData.isLoading;

  const { mergeParams, params } = queryPaginatedData;

  const handleAntdChange = useCallback<NonNullable<TableProps<R>['onChange']>>(
    (pagination, filters, sorter) => {
      const sort = Array.isArray(sorter) ? sorter[0] : sorter;

      mergeParams?.(
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
    scroll: minWidth ? { x: minWidth } : undefined,
    loading: isLoading,
    rowKey: 'id',
    columns: generateColumns<R>(columns, actions),
    onChange: mergeParams ? handleAntdChange : undefined,
    dataSource: isError ? [] : result,
    showSorterTooltip: true,
    pagination: generatePagination<P>(total, isLoading, params),
    locale: generateLocale(isError, refresh)
  };
}

function generateLocale(isError: boolean, refresh: (() => void) | undefined) {
  return {
    emptyText: isError ? (
      <>
        <Result
          status={500}
          title='Um problema aconteceu'
          extra={
            <Button type='default' onClick={() => refresh?.()}>
              Tentar Novamente
            </Button>
          }
        />
      </>
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    )
  };
}

function generatePagination<P extends PaginationParams>(
  total: number | undefined,
  isLoading: boolean | undefined,
  params: P | undefined
) {
  if (total === undefined || total === null) return false;

  return {
    disabled: isLoading,
    responsive: true,
    pageSize: params?.perPage,
    current: params?.page,
    showSizeChanger: true,
    total
  };
}

function generateColumns<R>(columns: TableColumnType<R>[] | undefined, actions: UseAntdTableProps<R>['actions']) {
  return [
    ...(columns ?? []),
    ...(actions
      ? [
          {
            title: 'Ações',
            fixed: 'right' as const,
            className: 'houston-table-action',
            render: (_: any, item: R) => {
              const items = Array.isArray(actions) ? actions : actions(item);

              if (items.length === 1) {
                return (
                  <Tooltip
                    title={items[0].label}
                    trigger={['hover']}
                    placement='bottomRight'
                    open={items[0].disabled ? false : undefined}
                  >
                    <Button
                      icon={items[0].icon}
                      shape='circle'
                      type='text'
                      onClick={() => items[0].onClick(item)}
                      disabled={items[0].disabled}
                    />
                  </Tooltip>
                );
              }

              return (
                <Dropdown
                  placement='bottomRight'
                  menu={{ items: items.map(a => ({ ...a, onClick: () => a.onClick(item) } as MenuItemType)) }}
                  trigger={['click']}
                >
                  <Button shape='circle' type='text' icon={<EllipsisOutlined />} />
                </Dropdown>
              );
            }
          }
        ]
      : [])
  ];
}
