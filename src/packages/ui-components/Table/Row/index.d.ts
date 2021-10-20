import * as React from 'react';
export interface ITableRowProps {
    id?: string;
    className?: string;
    data: unknown;
    index: number;
    children?: React.ReactNode;
    onClick?: () => void;
    onDoubleClick?: () => void;
}
declare const TableRow: React.NamedExoticComponent<ITableRowProps>;
export default TableRow;
