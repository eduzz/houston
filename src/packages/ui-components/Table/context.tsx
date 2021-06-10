import { createContext } from 'use-context-selector';

import { ITableSort, ITableActionOption } from './interface';

export interface ITableActionShow {
  anchorEl: HTMLElement;
  rowData: unknown;
  rowIndex?: number;
  options: ITableActionOption[];
}

export interface ITableContext {
  loading: boolean;

  sort?: ITableSort;
  onSort: (param: ITableSort) => void;

  columns: string[];
  registerColumn: () => () => void;

  actions: string[];
  registerActions: () => () => void;

  onShowAction: (param: ITableActionShow) => void;

  // isMobile: boolean;
  stripedRows: boolean;
  columnActionTitle?: string;
}

const TableContext = createContext<ITableContext>({
  loading: false,
  onSort: () => null,
  columns: [],
  registerColumn: () => () => null,
  onShowAction: () => null,
  actions: [],
  registerActions: () => () => null,
  stripedRows: false
});

export default TableContext;
