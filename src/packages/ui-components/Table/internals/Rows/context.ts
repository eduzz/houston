import * as React from 'react';

import { ITableRow } from '../../interfaces';

interface ITableRowContext {
  currentItemCollapse: unknown | null;
  setCurrentItemCollapse: React.Dispatch<unknown>;

  handleSetCurrentRow: (event: React.MouseEvent<HTMLElement>, row?: ITableRow) => void;
  handleClickCollapse: (row: ITableRow) => void;
  handleClickActions: (data: unknown) => void;
}

const RowContext = React.createContext<ITableRowContext>({} as ITableRowContext);
const RowContextProvider = RowContext.Provider;

export function useRow() {
  const context = React.useContext(RowContext);
  return context;
}

export default RowContextProvider;
