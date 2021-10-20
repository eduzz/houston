/// <reference types="react" />
import { ITableSort, ITableAction } from './interface';
export interface ITableRow {
    key: string;
    hasActions: boolean;
    hasCollapse: boolean;
}
export interface ITableActionShow {
    anchorEl: HTMLElement;
    rowData: unknown;
    rowIndex?: number;
    actions: ITableAction[];
}
export interface ITableContext {
    loading: boolean;
    loadingText?: React.ReactNode;
    size: 'small' | 'medium';
    sort?: ITableSort;
    onSort: (param: ITableSort) => void;
    columns: string[];
    registerColumn: (isCollapse?: boolean) => () => void;
    rows: ITableRow[];
    registerRow: (param: Omit<ITableRow, 'key'>) => () => void;
    rowMapLabel: {
        [rowKey: string]: string;
    };
    onShowAction: (param: ITableActionShow) => void;
    stripedRows: boolean;
    columnActionTitle?: string;
    hasCollapseInRows: boolean;
    hasActionInRows: boolean;
    isCollapseContent: boolean;
}
declare const TableContext: import("use-context-selector").Context<ITableContext>;
export default TableContext;
