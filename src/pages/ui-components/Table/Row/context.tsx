import { createContext } from 'use-context-selector';

import { ITableAction, ITableCollapse } from '../interface';

export interface ITableRowContext {
  data: unknown;
  index: number;
  collapse?: ITableCollapse;
  registerCollapse: (content: ITableCollapse) => () => void;
  registerAction: (option: Omit<ITableAction, 'key'>) => () => void;
  registerActionLoading: (loading: boolean) => void;
}

const TableRowContext = createContext<ITableRowContext>({} as ITableRowContext);

export default TableRowContext;
