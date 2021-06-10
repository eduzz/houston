import * as React from 'react';

import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../context';
import { ITableAlign } from '../interface';

type ITableColumnExtends = 'id' | 'className';

export interface ITableColumnProps extends Pick<TableCellProps, ITableColumnExtends> {
  children?: React.ReactNode;
  width?: number;
  /**
   * Default `left`
   */
  align?: ITableAlign;
  /**
   * Control of ordered columns
   * Default `false`
   */
  sortableField?: string;
  /**
   * Only the first and last columns can be fixed.
   * If there are actions in the table, the last fixed column will be disregarded.
   * If there is at least one fixed column, the table takes on a `white-space: no-wrap` style.
   * Default `false`
   */
  fixed?: boolean;
  /**
   * Create an action column (* priority * when use Table.Actions)
   */
  type?: 'action';
}

const TableColumn = React.memo<ITableColumnProps>(({ id, align, width, sortableField, children, className }) => {
  const registerColumn = useContextSelector(TableContext, context => context.registerColumn);
  const onSort = useContextSelector(TableContext, context => context.onSort);
  const sort = useContextSelector(TableContext, context => context.sort);
  const loading = useContextSelector(TableContext, context => context.loading);

  const isSorted = sort?.field === sortableField;

  const handleSort = React.useCallback(() => {
    onSort({
      field: sortableField,
      direction: !isSorted || sort?.direction === 'desc' ? 'asc' : 'desc'
    });
  }, [onSort, sortableField, isSorted, sort?.direction]);

  React.useEffect(() => {
    const unregister = registerColumn();
    return () => unregister();
  }, [registerColumn]);

  return (
    <TableCell
      id={id}
      align={align}
      className={className}
      sortDirection={isSorted ? sort?.direction : false}
      width={width}
    >
      {!!sortableField ? (
        <TableSortLabel
          active={isSorted}
          disabled={loading}
          direction={isSorted ? sort?.direction : 'asc'}
          onClick={handleSort}
        >
          {children}
        </TableSortLabel>
      ) : (
        children
      )}
    </TableCell>
  );
});

export default TableColumn;
