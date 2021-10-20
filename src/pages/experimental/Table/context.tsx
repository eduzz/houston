import { createContext } from 'use-context-selector';

import { ITableSort, ITableAction } from './interface';

export interface ITableRow {
  key: string;
  hasActions: boolean;
  hasCollapse: boolean;
}

export interface ITableActionShow {
  anchorEl: HTMLElement;
  rowData: unknown;
  rowIndex?: number;
  actions: ITableAction[];
}

export interface ITableContext {
  loading: boolean;
  loadingText?: React.ReactNode;
  size: 'small' | 'medium';

  sort?: ITableSort;
  onSort: (param: ITableSort) => void;

  columns: string[];
  registerColumn: () => () => void;

  rows: ITableRow[];
  registerRow: (param: Omit<ITableRow, 'key'>) => () => void;

  rowMapLabel: { [rowKey: string]: string };

  onShowAction: (param: ITableActionShow) => void;

  stripedRows: boolean;
  columnActionTitle?: string;

  hasCollapseInRows: boolean;
  hasActionInRows: boolean;
}

const TableContext = createContext<ITableContext>({
  loading: false,
  onSort: () => null,
  columns: [],
  registerColumn: () => () => null,
  onShowAction: () => null,
  rowMapLabel: {},
  rows: [],
  registerRow: () => () => null,
  stripedRows: false,
  size: 'medium',
  hasCollapseInRows: false,
  hasActionInRows: false
});

export default TableContext;
