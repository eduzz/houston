import * as React from 'react';
import { TableProps } from '@mui/material/Table';
import { ITableSort } from './interface';
export interface ITableProps extends Pick<TableProps, 'id' | 'children' | 'className'> {
    loading?: boolean;
    loadingText?: React.ReactNode;
    stickyHeader?: boolean;
    sort?: ITableSort;
    /**
     * Function called when clicking on an ordered column
     */
    onSort?: (ordernation: ITableSort) => void;
    /**
     * Default `medium`
     */
    size?: 'small' | 'medium';
    /**
     * Max Height table container
     */
    maxHeight?: number;
    stripedRows?: boolean;
    columnActionTitle?: string;
    mobileWidth?: number | boolean;
}
declare const _default: React.FC<ITableProps>;
export default _default;
