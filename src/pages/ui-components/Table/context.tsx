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

export type TableSize = 'small' | 'medium';

export interface ITableContext {
  loading: boolean;
  loadingText?: React.ReactNode;
  size: TableSize;

  sort?: ITableSort;
  onSort?: (param: ITableSort) => void;

  columns: string[];
  registerColumn: (isCollapse?: boolean) => () => void;

  rows: ITableRow[];
  registerRow: (param: Omit<ITableRow, 'key'>) => () => void;

  rowMapLabel: { [rowKey: string]: string };

  onShowAction: (param: ITableActionShow) => void;

  stripedRows: boolean;
  columnActionTitle?: string;

  hasCollapseInRows: boolean;
  hasActionInRows: boolean;

  isCollapseContent: boolean;
}

const TableContext = createContext<ITableContext>({} as ITableContext);

export default TableContext;
