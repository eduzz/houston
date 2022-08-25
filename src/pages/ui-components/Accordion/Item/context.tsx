import * as React from 'react';

import { createContext } from 'use-context-selector';

interface ItemContextProps {
  itemId: number;
}

const ItemContext = createContext<ItemContextProps>({} as ItemContextProps);

type ItemProviderProps = ItemContextProps & {
  children: React.ReactNode;
};

const ItemProvider = ({ children, itemId }: ItemProviderProps) => {
  const value = React.useMemo(() => ({ itemId }), [itemId]);
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export { ItemContext, ItemProvider };
