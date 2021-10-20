import { ITableAction, ITableCollapse } from '../interface';
export interface ITableRowContext {
    registerCollapse: (content: ITableCollapse) => () => void;
    registerAction: (option: Omit<ITableAction, 'key'>) => () => void;
}
declare const TableRowContext: import("use-context-selector").Context<ITableRowContext>;
export default TableRowContext;
