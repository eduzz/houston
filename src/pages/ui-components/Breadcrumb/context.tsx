import * as React from 'react';

export type BreadcrumbContextProps = {
  separator: React.ReactNode;
};

const BreadcrumbContext = React.createContext<BreadcrumbContextProps | null>(null);

export type BreadcrumbProviderProps = {
  children: React.ReactNode;
  separator: React.ReactNode;
};

function BreadcrumbProvider({ children, separator }: BreadcrumbProviderProps) {
  const value = React.useMemo(() => ({ separator }), [separator]);
  return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>;
}

function useBreadcrumb() {
  const ctx = React.useContext(BreadcrumbContext);
  if (!ctx) {
    throw new Error('You must provide a `BreadcrumbProvider` in order to use `useBreadcrumb`');
  }
  return ctx;
}

export { BreadcrumbContext, BreadcrumbProvider, useBreadcrumb };
