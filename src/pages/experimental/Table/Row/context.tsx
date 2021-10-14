import { createContext } from 'use-context-selector';

import { ITableAction, ITableCollapse } from '../interface';

export interface ITableRowContext {
  registerCollapse: (content: ITableCollapse) => () => void;
  registerAction: (option: Omit<ITableAction, 'key'>) => () => void;
}

const TableRowContext = createContext<ITableRowContext>({
  registerCollapse: () => () => null,
  registerAction: () => () => null
});

export default TableRowContext;
