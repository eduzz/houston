import * as React from 'react';

import { createContext, useContext } from 'use-context-selector';

export type SearchContextProps = {
  onSelect(value: string): void;
};

const SearchContext = createContext<SearchContextProps | null>(null);

export type SearchContextProviderProps = {
  children: React.ReactNode;
  closePopover: () => void;
  onChange?: (value: string | number | readonly string[] | undefined, e?: React.ChangeEvent<HTMLInputElement>) => any;
  onSelect?: (value: string | number | readonly string[] | undefined, e?: React.MouseEvent<HTMLDivElement>) => any;
};

function SearchContextProvider({ children, onChange, closePopover, onSelect }: SearchContextProviderProps) {
  const handleSelect = React.useCallback<SearchContextProps['onSelect']>(
    (selected: string) => {
      onChange && onChange(selected);
      onSelect && onSelect(selected);
      closePopover();
    },
    [closePopover, onChange, onSelect]
  );

  const contextValue = React.useMemo<SearchContextProps>(
    () => ({
      onSelect: handleSelect
    }),
    [handleSelect]
  );

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}

function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error('You must provide a `SearchContextProvider` in order to use `useSearch`');
  }
  return ctx;
}

export { SearchContextProvider, SearchContext, useSearch };
