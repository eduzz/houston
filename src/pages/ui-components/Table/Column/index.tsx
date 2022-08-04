import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { cx } from '@eduzz/houston-styles';
import styled from '@eduzz/houston-styles/styled';

import TableContext from '../context';
import TableHeaderContext from '../Header/context';
import SortLabel from './SortLabel';

export interface TableColumnProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  width?: number;
  /**
   * Default `left`
   */
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
  /**
   * Control of ordered columns
   * Default `false`
   */
  sortableField?: string;
}
const TableColumn = React.memo<TableColumnProps>(({ sortableField, children, className, align, ...rest }) => {
  const registerColumn = useContextSelector(TableContext, context => context.registerColumn);
  const onSort = useContextSelector(TableHeaderContext, context => context.onSort);
  const sortField = useContextSelector(TableHeaderContext, context => context.sortField);
  const sortDirection = useContextSelector(TableHeaderContext, context => context.sortDirection);
  const loading = useContextSelector(TableContext, context => context.loading);
  const tableSize = useContextSelector(TableContext, context => context.size);
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  const cellRef = React.useRef<HTMLTableCellElement>(null);

  const isSorted = sortField === sortableField;

  const handleSort = React.useCallback(() => {
    if (!onSort || !sortableField) {
      throw new Error(
        '@eduzz/houston-ui: add the onSort and sortableField prop to the TableHeader to filter the fields'
      );
    }

    onSort(sortableField, !isSorted || sortDirection === 'desc' ? 'asc' : 'desc');
  }, [onSort, sortableField, isSorted, sortDirection]);

  React.useEffect(() => {
    const unregister = registerColumn();
    return () => unregister();
  }, [registerColumn]);

  return (
    <th
      ref={cellRef}
      className={cx(
        className,
        className,
        `houston-column-align-${align ?? 'left'}`,
        tableSize === 'small' && '--small',
        isCollapseContent && '--collapse'
      )}
      {...rest}
    >
      <SortLabel
        sortable={!!sortableField && !isCollapseContent}
        active={isSorted}
        disabled={loading}
        direction={isSorted ? sortDirection : 'asc'}
        onClick={handleSort}
      >
        {children}
      </SortLabel>
    </th>
  );
});

export default styled(TableColumn)`
  padding: 8px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.neutralColor.high.light};

  &.--collapse {
    border-bottom-color: ${({ theme }) => theme.neutralColor.high.medium};
  }

  &.--small {
    padding: 8px 12px;
  }
`;
