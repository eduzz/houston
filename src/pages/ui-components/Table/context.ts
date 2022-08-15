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

  paginationPortal: string;

  loading?: boolean;
  loadingText?: React.ReactNode;

  error?: any;
  errorFormater?: (error: any) => string;
  errorOnRetry?: () => void;

  total?: number;
  emptyText?: string;
}

const TableContext = createContext<TableContextProps>({
  rows: [],
  registerRow: () => () => null,
  hasActionInRows: false,
  hasCollapseInRows: false,
  paginationPortal: ''
});

export default TableContext;
