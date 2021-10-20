import * as React from 'react';
import { GridSize } from '@mui/material/Grid';
export interface ITableCellProps {
    id?: string;
    className?: string;
    colSpan?: number;
    columnLabel?: string;
    mobileSize?: GridSize | true | false | 0;
    mobileAlign?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
    onClick?: () => void;
    onDoubleClick?: () => void;
    children?: React.ReactNode;
    align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
}
declare const TableCell: React.NamedExoticComponent<ITableCellProps>;
export default TableCell;
