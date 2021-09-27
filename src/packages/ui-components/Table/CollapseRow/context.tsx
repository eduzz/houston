import { createContext } from 'use-context-selector';

import { ITableAction } from '../interface';

export interface ITableCollapseRowContext {
  registerAction: (option: Omit<ITableAction, 'key'>) => () => void;
}

const TableCollapseRowContext = createContext<ITableCollapseRowContext>({
  registerAction: () => () => null
});

export default TableCollapseRowContext;
