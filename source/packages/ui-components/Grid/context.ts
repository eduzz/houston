import * as React from 'react';

import { IContainerType } from './interfaces';

interface IGridContext {
  spacing?: IContainerType;
}

const GridContext = React.createContext<IGridContext>({});
const GridContextProvider = GridContext.Provider;

export function useGrid(): IGridContext {
  const context = React.useContext(GridContext);
  return context ?? {};
}

export default GridContextProvider;
