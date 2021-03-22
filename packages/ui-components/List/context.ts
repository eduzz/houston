import * as React from 'react';

import { IListItem } from './interfaces';

interface IListContext {
  items?: IListItem[];
  stripedRows?: boolean;
}

export const ListContext = React.createContext<IListContext>({} as IListContext);
export const ListContextProvider = ListContext.Provider;

export function useListContext() {
  const context = React.useContext(ListContext);
  return context;
}

export default ListContextProvider;
