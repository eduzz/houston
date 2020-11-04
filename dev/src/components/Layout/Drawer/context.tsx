import React from 'react';

export interface IDrawerContext {
  open(): void;
  close(): void;
  toogle(): void;
  isFull: boolean;
  isTemporary: boolean;
}

export const DrawerContext = React.createContext<IDrawerContext>(null);
