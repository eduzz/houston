import { Placement } from '@popperjs/core';
import { createContext } from 'use-context-selector';

export interface IPopoverContextState {
  opened: boolean;
  target: HTMLElement;
  content: HTMLElement;
  placement: Placement;
}

export interface IPopoverContext {
  openedTarget: HTMLElement;
  setState(state: IPopoverContextState): () => void;
}

const PopoverContext = createContext<IPopoverContext>({
  setState: () => () => null,
  openedTarget: null
});

export default PopoverContext;
