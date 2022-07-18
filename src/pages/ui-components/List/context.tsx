import * as React from 'react';

import { createContext } from 'use-context-selector';

interface ListContextProps {
  dividers: boolean;
}

const ListContext = createContext<ListContextProps>({ dividers: false });

interface ListProviderProps {
  dividers: boolean;
  children: React.ReactNode;
}

const ListContextProvider = ({ children, dividers }: ListProviderProps) => {
  const value = React.useMemo(() => ({ dividers }), [dividers]);
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export { ListContext };
export default ListContextProvider;
