import { useCallback } from 'react';

import { EllipsisOutlined } from '@ant-design/icons';
import { Result, Empty, Button, Dropdown } from 'antd';
import type { TableProps, TableColumnType } from 'antd';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';

import { PaginationParams } from '@eduzz/houston-hooks/pagination';
import { UsePromisePaginated } from '@eduzz/houston-hooks/usePromisePaginated';
import { UseQueryPaginatedResult } from '@eduzz/houston-hooks/useQueryPaginated';

export type UseAntdTrableProps<R> = {
  columns?: TableColumnType<R>[];
  actions?: Array<Omit<MenuItemType, 'onClick'> & { onClick: (item: R) => void }>;
};

export default function useAntdTrableProps<P extends PaginationParams, R>(
  { mergeParams, params, isLoading, refresh, ...rest }: UseQueryPaginatedResult<P, R> | UsePromisePaginated<P, R>,
  { columns, actions }: UseAntdTrableProps<R>
): TableProps<R> {
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
    columns: generateColumns<R>(columns, actions),
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

function generateColumns<R>(
  columns: TableColumnType<R>[] | undefined,
  actions: (Omit<MenuItemType, 'onClick'> & { onClick: (item: R) => void })[] | undefined
) {
  return [
    ...(columns ?? []),
    ...(actions
      ? [
          {
            title: 'Ações',
            fixed: 'right' as const,
            className: 'houston-table-action',
            render: (_: any, item: R) => (
              <Dropdown
                placement='bottomRight'
                menu={{ items: actions.map(a => ({ ...a, onClick: () => a.onClick(item) } as MenuItemType)) }}
                trigger={['click']}
              >
                <Button shape='circle' type='text' icon={<EllipsisOutlined />} />
              </Dropdown>
            )
          }
        ]
      : [])
  ];
}
