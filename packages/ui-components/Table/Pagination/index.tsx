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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Pagination(props: ITablePagination): null {
  return null;
}

export default React.memo(Pagination);
