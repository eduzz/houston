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
  const ctx = React.useContext(ContainerContext);
  if (!ctx) {
    throw new Error('You must provide a `ContainerProvider` in order to use `useContainer`');
  }
  return ctx;
}

export { ContainerContext, ContainerProvider, useContainer };
