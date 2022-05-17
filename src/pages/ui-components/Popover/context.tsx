import * as React from 'react';

export interface IPopoverContextState {
  opened: boolean;
  target: HTMLElement;
  content: React.ReactNode;
}

export interface IPopoverContext {
  (state: IPopoverContextState): void;
}

const PopoverContext = React.createContext<IPopoverContext>(() => null);
export default PopoverContext;
