import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';

import TableContext from '../context';
import { ITableSize } from '../interface';
import SortLabel from './SortLabel';

export interface ITableColumnProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  width?: number;
  /**
   * Default `left`
   */
  align?: React.TdHTMLAttributes<HTMLTableDataCellElement>['align'];
  /**
   * Control of ordered columns
   * Default `false`
   */
  sortableField?: string;
}

const useStyles = createUseStyles(theme => ({
  root: ({ size }: { size: ITableSize }) => ({
    padding: size === 'small' ? '8px 12px' : '8px 20px',
    borderBottom: `1px solid ${theme.colors.grey[200]}`
  })
}));

const TableColumn = React.memo<ITableColumnProps>(({ sortableField, children, className, align, ...rest }) => {
  const registerColumn = useContextSelector(TableContext, context => context.registerColumn);
  const onSort = useContextSelector(TableContext, context => context.onSort);
  const sort = useContextSelector(TableContext, context => context.sort);
  const loading = useContextSelector(TableContext, context => context.loading);
  const tableSize = useContextSelector(TableContext, context => context.size);

  const classes = useStyles({ size: tableSize });

  const cellRef = React.useRef<HTMLTableHeaderCellElement>();

  const isSorted = sort?.field === sortableField;

  const handleSort = React.useCallback(() => {
    if (!onSort) {
      throw new Error('@eduzz/houston-ui: add the onSort prop to the Table to filter the fields');
    }

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
    <th className={clsx(classes.root, className, `column-align-${align ?? 'left'}`)} ref={cellRef} {...rest}>
      <SortLabel
        sortable={!!sortableField}
        active={isSorted}
        disabled={loading}
        direction={isSorted ? sort?.direction : 'asc'}
        onClick={handleSort}
      >
        {children}
      </SortLabel>
    </th>
  );
});

export default TableColumn;
