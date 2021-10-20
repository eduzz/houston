import * as React from 'react';
declare type ITablePaginationExtends = 'id' | 'className' | 'children';
export interface ITablePagination extends Pick<React.HTMLAttributes<HTMLTableRowElement>, ITablePaginationExtends> {
    page: number;
    perPage: number;
    total: number;
    optionsPerPage?: number[] | 'string' | false;
    labelItensPerPage?: React.ReactNode;
    labelGoToPage?: React.ReactNode;
    onChangePage: (page: number) => void;
    onChangePerPage: (rowsPerPage: number) => void;
}
declare const Pagination: React.NamedExoticComponent<ITablePagination>;
export default Pagination;
