import { Placement } from '@popperjs/core';
import { createContext } from 'use-context-selector';

export interface PopoverContextState {
  opened: boolean;
  target: HTMLElement | null;
  content: HTMLElement | null;
  placement: Placement | null;
}

export interface PopoverContextProps {
  openedTarget: HTMLElement | null;
  setState(state: PopoverContextState): () => void;
}

const PopoverContext = createContext<PopoverContextProps>({
  setState: () => () => null,
  openedTarget: null
});

export default PopoverContext;
