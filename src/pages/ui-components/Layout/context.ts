import { createContext } from 'use-context-selector';

export const TOPBAR_DROPDOWN_WIDTH = 336;
export const TOPBAR_MENU_MIN_WIDTH_IN_PX = 260;

export const MENU_WIDTH = 248;

export interface LayoutContextType {
  topbar: {
    exists: boolean;
    register(): () => void;
  };

  sidebar: {
    exists: boolean;
    opened: boolean;
    register(): () => void;
    toogleOpened(): void;
    trueOpened(): void;
    falseOpened(): void;
  };

  userMenu: {
    exists: boolean;
    opened: boolean;
    container: HTMLDivElement | null;
    register(): () => void;
    registerContainer(container: HTMLDivElement): void;
    toogleOpened(): void;
    trueOpened(): void;
    falseOpened(): void;
  };
}

const LayoutContext = createContext<LayoutContextType>({
  topbar: {
    exists: false,
    register: () => () => null
  },

  sidebar: {
    exists: false,
    opened: false,
    register: () => () => null,
    toogleOpened: () => null,
    trueOpened: () => null,
    falseOpened: () => null
  },

  userMenu: {
    exists: false,
    opened: false,
    container: null,
    register: () => () => null,
    registerContainer: () => null,
    toogleOpened: () => null,
    trueOpened: () => null,
    falseOpened: () => null
  }
});

export default LayoutContext;
