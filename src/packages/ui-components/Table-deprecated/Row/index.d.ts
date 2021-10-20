import * as React from 'react';
import { TableRowProps } from '@mui/material/TableRow';
declare type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'children' | 'onClick' | 'onDoubleClick';
export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
    /**
     * Row values, used only when there are actions (Table.Actions) in the table
     */
    data?: unknown;
    endAdornment?: React.ReactNode;
}
declare const _default: React.FC<ITableRowProps>;
export default _default;
