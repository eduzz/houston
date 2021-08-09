import * as React from 'react';

import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';

interface ITableCollapseContext {
  row: ITableRow;
  collapse: unknown;
  currentRow: ITableRow;
  options: ITableOptionProps[];
  anchorEl: null | HTMLElement;
  handleCloseActions: () => void;
  handleSetCurrentRow: (event: React.MouseEvent<HTMLElement>, row: ITableRow) => void;
}

const CollapseContext = React.createContext<ITableCollapseContext>({} as ITableCollapseContext);
const CollapseContextProvider = CollapseContext.Provider;

export function useCollapse() {
  return React.useContext(CollapseContext);
}

export default CollapseContextProvider;
