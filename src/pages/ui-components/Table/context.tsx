import { createContext } from 'use-context-selector';

import { TableSort, TableAction } from './interface';

export interface TableRow {
  key: string;
  hasActions: boolean;
  hasCollapse: boolean;
}

export interface TableActionShow {
  anchorEl: HTMLElement;
  rowData: unknown;
  rowIndex?: number;
  actions: TableAction[];
}

export type TableSize = 'small' | 'medium';

export interface TableContextProps {
  loading: boolean;
  loadingText?: React.ReactNode;
  size: TableSize;

  sort?: TableSort;
  onSort?: (param: TableSort) => void;

  columns: string[];
  registerColumn: (isCollapse?: boolean) => () => void;

  rows: TableRow[];
  registerRow: (param: Omit<TableRow, 'key'>) => () => void;

  rowMapLabel: { [rowKey: string]: string };

  onShowAction: (param: TableActionShow) => void;

  stripedRows: boolean;
  columnActionTitle?: string;

  hasCollapseInRows: boolean;
  hasActionInRows: boolean;

  isCollapseContent: boolean;
}

const TableContext = createContext<TableContextProps>({} as TableContextProps);

export default TableContext;
