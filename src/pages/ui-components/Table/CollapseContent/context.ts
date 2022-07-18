import { createContext } from 'use-context-selector';

export interface TableCollapseContextProps {
  isCollapseContent: boolean;
}

const TableCollapseContext = createContext<TableCollapseContextProps>({} as TableCollapseContextProps);

export default TableCollapseContext;
