import { useContextSelector } from 'use-context-selector';

import Pagination, { PaginationProps } from '../../Pagination';
import Portal from '../../Portal';
import TableContext from '../context';

export interface TablePaginationProps extends Omit<PaginationProps, 'mode' | 'total'> {}

const TablePagination = ({ disabled, ...props }: TablePaginationProps) => {
  const paginationPortal = useContextSelector(TableContext, context => context.paginationPortal);
  const loading = useContextSelector(TableContext, context => context.loading);
  const total = useContextSelector(TableContext, context => context.total);

  return (
    <Portal target={paginationPortal}>
      <Pagination
        {...props}
        total={total ?? 0}
        mode='table'
        disabled={disabled ?? loading}
        className='hts-table-pagination'
      />
    </Portal>
  );
};

export default TablePagination;
