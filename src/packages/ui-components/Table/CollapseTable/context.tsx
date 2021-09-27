import { createContext } from 'use-context-selector';

import { ITableActionShow, ITableRow } from '../context';

export interface ITableContext {
  loading: boolean;
  loadingText?: React.ReactNode;

  columnsCollapse: string[];
  registerColumn: (isCollapse?: boolean) => () => void;

  rowsCollapse: Omit<ITableRow, 'hasCollapse'>[];
  registerRowCollapse: (param: Omit<ITableRow, 'key' | 'hasCollapse'>) => () => void;

  rowMapLabel: { [rowKey: string]: string };

  onShowAction: (param: ITableActionShow) => void;

  columnActionTitle?: string;

  hasActionInRows: boolean;
}

const TableContext = createContext<ITableContext>({
  loading: false,
  columnsCollapse: [],
  registerColumn: () => () => null,
  onShowAction: () => null,
  rowMapLabel: {},
  rowsCollapse: [],
  registerRowCollapse: () => () => null,
  hasActionInRows: false
});

export default TableContext;
