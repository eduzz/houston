import { Placement } from '@popperjs/core';
import { createContext } from 'use-context-selector';

export interface IPopoverContextState {
  opened: boolean;
  target: HTMLElement | null;
  content: HTMLElement | null;
  placement: Placement | null;
}

export interface IPopoverContext {
  openedTarget: HTMLElement | null;
  setState(state: IPopoverContextState): () => void;
}

const PopoverContext = createContext<IPopoverContext>({
  setState: () => () => null,
  openedTarget: null
});

export default PopoverContext;
