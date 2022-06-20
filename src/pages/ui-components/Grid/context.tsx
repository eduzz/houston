import * as React from 'react';

import { IContainerType } from './Container';

export type ContainerContextProps = {
  spacing: IContainerType;
};

const ContainerContext = React.createContext<ContainerContextProps | null>(null);

export type ContainerProviderProps = {
  children: React.ReactNode;
  spacing: IContainerType;
};

function ContainerProvider({ children, spacing }: ContainerProviderProps) {
  const value = React.useMemo(() => ({ spacing }), [spacing]);
  return <ContainerContext.Provider value={value}>{children}</ContainerContext.Provider>;
}

function useContainer() {
  return React.useContext(ContainerContext);
}

export { ContainerContext, ContainerProvider, useContainer };
