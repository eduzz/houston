import * as React from 'react';
declare type ITablePaginationExtends = 'id' | 'className' | 'children';
export interface ITablePagination extends Pick<React.HTMLAttributes<HTMLTableRowElement>, ITablePaginationExtends> {
    /**
     * Current page
     */
    page: number;
    perPage: number;
    /**
     * Total rows/items
     */
    total: number;
    optionsPerPage?: number[];
    labelItensPerPage?: React.ReactNode;
    labelGoToPage?: React.ReactNode;
    onChangeRowsPerPage?: (rowsPerPage: number) => void;
    onChangeGoToPage?: (goToPage: number) => void;
    onChangePage?: (page: number) => void;
}
declare const _default: React.FC<ITablePagination>;
export default _default;
