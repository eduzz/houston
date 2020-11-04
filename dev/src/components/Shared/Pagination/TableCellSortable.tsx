import React, { memo, useCallback, useMemo } from 'react';

import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { IPaginationParams } from 'interfaces/pagination';

interface IProps extends Omit<TableCellProps, 'onChange'> {
  disabled?: boolean;
  column: string;
  paginationParams: IPaginationParams;
  children?: React.ReactNode;
  onChange: (params: { orderBy: string; orderDirection: 'asc' | 'desc' }) => void;
}

const TableCellSortable = memo((props: IProps) => {
  const { paginationParams, children, column, disabled, onChange, ...extra } = props;

  const isActive = useMemo(() => paginationParams.orderBy === column, [column, paginationParams.orderBy]);
  const sortDirection = useMemo(() => {
    return isActive ? paginationParams.orderDirection : false;
  }, [isActive, paginationParams.orderDirection]);

  const handleChange = useCallback(() => {
    const direction = isActive && paginationParams.orderDirection === 'asc' ? 'desc' : 'asc';
    onChange({ orderBy: column, orderDirection: direction });
  }, [column, isActive, onChange, paginationParams.orderDirection]);

  return (
    <TableCell {...extra} sortDirection={sortDirection}>
      <TableSortLabel
        disabled={disabled}
        active={isActive}
        direction={paginationParams.orderDirection}
        onClick={handleChange}
      >
        {children}
      </TableSortLabel>
    </TableCell>
  );
});

export default TableCellSortable;
