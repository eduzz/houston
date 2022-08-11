import { createContext } from 'use-context-selector';

export interface TableRow {
  key: string;
  hasActions: boolean;
  hasCollapse: boolean;
}

export interface TableContextProps {
  rows: TableRow[];
  registerRow: (param: Omit<TableRow, 'key'>) => () => void;

  hasCollapseInRows: boolean;
  hasActionInRows: boolean;
}

const TableContext = createContext<TableContextProps>({
  rows: [],
  registerRow: () => () => null,
  hasActionInRows: false,
  hasCollapseInRows: false
});

export default TableContext;
