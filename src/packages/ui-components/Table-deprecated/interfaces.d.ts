/// <reference types="react" />
import { ITableActionsProps } from './Actions';
import { ITableCellProps } from './Cell';
import { ITableCollapseProps } from './Collapse';
import { ITableColumnProps } from './Column';
import { ITableOptionProps } from './Option';
import { ITableRowProps } from './Row';
declare type ITableCell = {
    cells?: ITableCellProps[];
};
declare type ITableOptions = {
    options?: ITableOptionProps[];
};
export declare type ITableCollapseType = 'list' | 'table';
export declare type ITableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export interface ITableActions extends ITableActionsProps, ITableOptions {
}
export interface ITableCollapse extends ITableCollapseProps {
    columns: ITableColumnProps[];
    rows: ITableRow[];
    actions: ITableActions;
}
export interface ITableRow extends ITableRowProps, ITableCell, ITableOptions {
    collapse: ITableCollapse;
}
export interface ITableSortable {
    field: string;
    order: 'asc' | 'desc';
}
export interface ITableMessages {
    empty?: React.ReactNode;
}
export interface IRowProps {
    currentItemCollapse: unknown | null;
    setCurrentItemCollapse: React.Dispatch<unknown>;
    handleSetCurrentRow: (event: React.MouseEvent<HTMLElement>, row?: ITableRow) => void;
    handleClickCollapse: (row: ITableRow) => void;
    handleClickActions: (event: React.MouseEvent<HTMLElement>, data: unknown) => void;
}
export {};
