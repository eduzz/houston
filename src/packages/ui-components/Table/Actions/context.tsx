import { createContext } from 'use-context-selector';

import { ITableActionOption } from '../interface';

export interface ITableActionContext {
  registerOption: (option: Omit<ITableActionOption, 'key'>) => () => void;
}

const TableActionContext = createContext<ITableActionContext>({
  registerOption: () => () => null
});

export default TableActionContext;
