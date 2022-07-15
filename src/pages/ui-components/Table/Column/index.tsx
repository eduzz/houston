import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { cx } from '@eduzz/houston-styles';
import styled from '@eduzz/houston-styles/styled';

import TableContext from '../context';
import SortLabel from './SortLabel';

export interface ITableColumnProps {
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
const TableColumn = React.memo<ITableColumnProps>(({ sortableField, children, className, align, ...rest }) => {
  const registerColumn = useContextSelector(TableContext, context => context.registerColumn);
  const onSort = useContextSelector(TableContext, context => context.onSort);
  const sort = useContextSelector(TableContext, context => context.sort);
  const loading = useContextSelector(TableContext, context => context.loading);
  const tableSize = useContextSelector(TableContext, context => context.size);
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  const cellRef = React.useRef<HTMLTableCellElement>(null);

  const isSorted = sort?.field === sortableField;

  const handleSort = React.useCallback(() => {
    if (!onSort || !sortableField) {
      throw new Error('@eduzz/houston-ui: add the onSort and sortableField prop to the Table to filter the fields');
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
        direction={isSorted ? sort?.direction : 'asc'}
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
