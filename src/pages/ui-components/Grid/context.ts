import { createContext } from 'use-context-selector';

import { IContainerType } from './interfaces';

interface IGridContext {
  spacing?: IContainerType;
}

export const GridContext = createContext<IGridContext>({});
const GridContextProvider = GridContext.Provider;

export default GridContextProvider;
