import * as React from 'react';

import { ITableSort } from './interface';

interface ITableContext {
  loading: boolean;
  // initialOrdenation?: ITableSortable;
  onSort: (params: ITableSort) => void;
  registerColumn: () => () => void;
  // messages?: ITableMessages;

  // columns: ITableColumnProps[];
  sort?: ITableSort;
  columns: Set<string>;
  // actions: ITableActions | undefined;

  // currentRow: ITableRow;
  // setCurrentRow: React.Dispatch<React.SetStateAction<ITableRow>>;

  // anchorEl: HTMLElement | null;
  // setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;

  // options: ITableOptionProps[];
  // setOptions: React.Dispatch<React.SetStateAction<ITableOptionProps[]>>;

  // pagination: ITablePagination | undefined;

  // hasCollapseData: boolean;
  // hasColumnAction: boolean;
  // numberColumns: number;

  // isMobile: boolean;
  // stripedRows: boolean;
}

const TableContext = React.createContext<ITableContext>({
  loading: false,
  onSort: () => null,
  registerColumn: () => () => null,
  columns: new Set()
});

export default TableContext;
