import * as React from 'react';

type ITablePaginationExtends = 'id' | 'className' | 'style' | 'children';

export interface ITablePagination extends Pick<React.HTMLAttributes<HTMLTableRowElement>, ITablePaginationExtends> {
  /**
   * Current page
   */
  page: number;
  perPage: number;
  totalPages: number;
  optionsPerPage?: number[];
  labelItensPerPage?: React.ReactNode;
  onChangeRowsPerPage?: (rowsPerPage: number) => void;
  onChangeGoToPage?: (goToPage: number) => void;
  onChangePage?: (page: number) => void;
}

export default React.memo<ITablePagination>(() => null);
