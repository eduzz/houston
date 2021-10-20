import * as React from 'react';
import { GridSize } from '@mui/material/Grid';
import { TableCellProps } from '@mui/material/TableCell';
declare type ITableCellExtends = 'id' | 'className' | 'children' | 'padding' | 'colSpan' | 'align' | 'onClick' | 'onDoubleClick';
export declare type ITableCellXsAlign = 'left' | 'center' | 'right';
export interface ITableCellXs {
    margin?: number | string;
    size?: GridSize | 0;
    order?: number;
    align?: ITableCellXsAlign;
    truncate?: boolean;
}
export interface ITableCellProps extends Pick<TableCellProps, ITableCellExtends> {
    /**
     * Default `false`
     */
    truncate?: number;
    /**
     * Default
     * `margin`: 0
     * `size`: 12
     */
    xs?: ITableCellXs;
}
declare const _default: React.FC<ITableCellProps>;
export default _default;
