import { createContext } from 'use-context-selector';

export const TOPBAR_DROPDOWN_WIDTH = 336;
export const TOPBAR_MENU_MIN_WIDTH_IN_PX = 260;

export const MENU_WIDTH = 248;

export interface LayoutContextType {
  topbar: {
    exists: boolean;
    centerPortal: HTMLDivElement | null;
    register(): () => void;
    registerCenterPortal(container: HTMLDivElement): void;
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
    containerPortal: HTMLDivElement | null;
    register(): () => void;
    registerContainerPortal(container: HTMLDivElement): void;
    toogleOpened(): void;
    trueOpened(): void;
    falseOpened(): void;
  };
}

const LayoutContext = createContext<LayoutContextType>({
  topbar: {
    exists: false,
    centerPortal: null,
    register: () => () => null,
    registerCenterPortal: () => null
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
    containerPortal: null,
    register: () => () => null,
    registerContainerPortal: () => null,
    toogleOpened: () => null,
    trueOpened: () => null,
    falseOpened: () => null
  }
});

export default LayoutContext;
