import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { cx, StyledProp } from '@eduzz/houston-styles';

import SortLabel from './SortLabel';
import error from '../../utils/error';
import TableContext from '../context';
import TableHeaderContext from '../Header/context';

export interface TableColumnProps extends StyledProp, React.ThHTMLAttributes<HTMLTableCellElement> {
  width?: number;
  children?: React.ReactNode;
  sortableField?: string;
}

const TableColumn = ({ sortableField, children, className, ...rest }: TableColumnProps) => {
  const onSort = useContextSelector(TableHeaderContext, context => context.onSort);
  const sortField = useContextSelector(TableHeaderContext, context => context.sortField);
  const sortDirection = useContextSelector(TableHeaderContext, context => context.sortDirection);
  const loading = useContextSelector(TableContext, context => context.loading);
  const isSorted = sortField === sortableField;

  const handleSort = React.useCallback(() => {
    if (!onSort || !sortableField) {
      error('TableColumn', 'add the onSort and sortableField prop to the TableHeader to filter the fields');
      return;
    }

    onSort(sortableField, !isSorted || sortDirection === 'desc' ? 'asc' : 'desc');
  }, [onSort, sortableField, isSorted, sortDirection]);

  return (
    <th className={cx(className, 'hts-table-column', { 'hts-table-column-disabled': loading })} {...rest}>
      <SortLabel
        sortable={!!sortableField}
        active={isSorted}
        disabled={loading}
        direction={isSorted ? sortDirection : 'asc'}
        onClick={handleSort}
      >
        {children}
      </SortLabel>
    </th>
  );
};

/**
 * @deprecated Use Table from Antd
 * https://ant.design/components/table/
 */
export default React.memo(TableColumn);
