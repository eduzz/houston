import * as React from 'react';

import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import clsx from 'clsx';

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
  const context = React.useContext(TableContext);

  const isSorted = context.sort?.field === sortableField;

  const handleSort = React.useCallback(() => {
    context.onSort({
      field: sortableField,
      direction: !isSorted || context.sort?.direction === 'desc' ? 'asc' : 'desc'
    });
  }, [context, sortableField, isSorted]);

  React.useEffect(() => {
    const unregister = context.registerColumn();
    return () => unregister();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableCell
      id={id}
      align={align}
      className={clsx(className)}
      sortDirection={isSorted ? context.sort?.direction : false}
      width={width}
    >
      {!!sortableField ? (
        <TableSortLabel
          active={isSorted}
          disabled={context.loading}
          direction={isSorted ? context.sort?.direction : 'asc'}
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
