import { createContext } from 'use-context-selector';

export interface ITableCollapseContext {
  isCollapseContent: boolean;
}

const TableCollapseContext = createContext<ITableCollapseContext>({} as ITableCollapseContext);

export default TableCollapseContext;
