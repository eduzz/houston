import * as React from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

import { Spacing } from './Row';

export type RowContextProps = {
  spacing: Spacing;
};

const RowContext = createContext<RowContextProps | null>(null);

export type RowProviderProps = {
  children: React.ReactNode;
  spacing: Spacing;
};

function RowProvider({ children, spacing }: RowProviderProps) {
  const value = React.useMemo(() => ({ spacing }), [spacing]);
  return <RowContext.Provider value={value}>{children}</RowContext.Provider>;
}

function useRow() {
  const ctx = useContextSelector(RowContext, context => context);
  if (!ctx) {
    throw new Error('You must provide a `RowProvider` in order to use `useRow`');
  }
  return ctx;
}

export { RowContext, RowProvider, useRow };