import * as React from 'react';
import { TableProps } from '@mui/material/Table';
import { ITableCellProps } from './Cell';
import { ITableColumnProps } from './Column';
import { ITableMessages, ITableSortable } from './interfaces';
import { ITableOptionProps } from './Option';
import { ITablePagination } from './Pagination';
export interface ITableProps extends Pick<TableProps, 'id' | 'children'> {
    loading?: boolean;
    initialOrdenation?: ITableSortable;
    /**
     * Function called when clicking on an ordered column
     */
    onSortable?: (ordernation: ITableSortable) => void;
    /**
     * Function called when clicking in icon action in row
     */
    onActionsClick?: (event: React.MouseEvent<HTMLElement>, data: unknown) => void;
    /**
     * Default `false`
     */
    stickyHeader?: boolean;
    /**
     * Default `medium`
     */
    size?: 'small' | 'medium';
    /**
     * Max Height table container
     */
    maxHeight?: number;
    /**
     * Messages for some situations, example: `when there is no date`
     */
    messages?: ITableMessages;
    stripedRows?: boolean;
}
declare const _default: React.FC<ITableProps> & {
    Column: React.FC<ITableColumnProps>;
    Row: React.FC<import("./Row").ITableRowProps>;
    Cell: React.FC<ITableCellProps>;
    Actions: React.FC<import("./Actions").ITableActionsProps>;
    Option: React.FC<ITableOptionProps>;
    Pagination: React.FC<ITablePagination>;
    Collapse: React.FC<import("./Collapse").ITableCollapseProps>;
};
export default _default;
