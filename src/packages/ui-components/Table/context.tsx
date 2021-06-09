import * as React from 'react';

import { ITableActionOption } from './Actions/context';
import { ITableSort } from './interface';

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

  onShowAction: (param: ITableActionShow) => void;

  // isMobile: boolean;
  stripedRows: boolean;
}

const TableContext = React.createContext<ITableContext>({
  loading: false,
  onSort: () => null,
  registerColumn: () => () => null,
  onShowAction: () => null,
  columns: [],
  stripedRows: false
});

export default TableContext;
