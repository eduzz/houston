import * as React from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

interface ItemContextProps {
  itemId: number;
}

const ItemContext = createContext<ItemContextProps | null>(null);

interface ItemProviderProps {
  children: React.ReactNode;
  itemId: number;
}

const ItemProvider = ({ children, itemId }: ItemProviderProps) => {
  const value = React.useMemo(() => ({ itemId }), [itemId]);
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

function useItemId() {
  const ctx = useContextSelector(ItemContext, context => context);
  if (!ctx) {
    throw new Error('You must provide a `ItemProvider` in order to use `useItem`');
  }
  return ctx;
}

export { ItemContext, ItemProvider, useItemId };
