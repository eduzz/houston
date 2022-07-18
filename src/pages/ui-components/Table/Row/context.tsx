import { createContext } from 'use-context-selector';

import { TableAction, TableCollapse } from '../interface';

export interface TableRowContextProps {
  data: unknown;
  index: number;
  collapse?: TableCollapse;
  registerCollapse: (content: TableCollapse) => () => void;
  registerAction: (option: Omit<TableAction, 'key'>) => () => void;
  registerActionLoading: (loading: boolean) => void;
}

const TableRowContext = createContext<TableRowContextProps>({} as TableRowContextProps);

export default TableRowContext;
