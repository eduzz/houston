import { createContext } from 'use-context-selector';

export interface IPopoverContextState {
  opened: boolean;
  target: HTMLElement;
  content: HTMLElement;
}

export interface IPopoverContext {
  setState(state: IPopoverContextState): () => void;
  openedTarget: HTMLElement;
}

const PopoverContext = createContext<IPopoverContext>({
  setState: () => () => null,
  openedTarget: null
});

export default PopoverContext;
