import * as React from 'react';
import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';
interface ITableCollapseContext {
    row: ITableRow;
    collapse: unknown;
    currentRow: ITableRow;
    options: ITableOptionProps[];
    anchorEl: null | HTMLElement;
    handleCloseActions: () => void;
    handleSetCurrentRow: (event: React.MouseEvent<HTMLElement>, row: ITableRow) => void;
}
declare const CollapseContextProvider: React.Provider<ITableCollapseContext>;
export declare function useCollapse(): ITableCollapseContext;
export default CollapseContextProvider;
