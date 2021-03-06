import * as React from 'react';

import { ITableColumnProps } from './Column';
import { ITableActions, ITableMessages, ITableRow, ITableSortable } from './interfaces';
import { ITableOptionProps } from './Option';
import { ITablePagination } from './Pagination';

interface ITableContext {
  loading: boolean;
  initialOrdenation?: ITableSortable;
  onSortable: ({ field, order }: ITableSortable) => void;
  messages?: ITableMessages;

  columns: ITableColumnProps[];
  rows: ITableRow[];
  actions: ITableActions | undefined;

  currentRow: ITableRow;
  setCurrentRow: React.Dispatch<React.SetStateAction<ITableRow>>;

  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;

  options: ITableOptionProps[];
  setOptions: React.Dispatch<React.SetStateAction<ITableOptionProps[]>>;

  pagination: ITablePagination | undefined;

  hasCollapseData: boolean;
  hasColumnAction: boolean;
  numberColumns: number;

  isMobile: boolean;
  stripedRows: boolean;
}

export const TableContext = React.createContext<ITableContext>({} as ITableContext);
export const TableContextProvider = TableContext.Provider;

export function useTableContext() {
  const context = React.useContext(TableContext);
  return context;
}

export default TableContextProvider;
