import * as React from 'react';
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
declare const TableColumn: React.NamedExoticComponent<ITableColumnProps>;
export default TableColumn;
