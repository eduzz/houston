import { createContext } from 'use-context-selector';

export const TOOLBAR_HEIGHT = 48;
export const TOOLBAR_DROPDOWN_WIDTH = 340;
export const TOOLBAR_MENU_WIDTH = 260;

export const SIDEBAR_WIDTH = 300;

export interface LayoutContextType {
  hasToolbar: boolean;
  hasSidebar: boolean;
  userMenu: {
    exists: boolean;
    opened: boolean;
    container: React.Ref<HTMLDivElement> | undefined;
    register(): () => void;
    toogleOpened(): void;
    trueOpened(): void;
    falseOpened(): void;
  };

  registerToolbar(): () => void;
  registerSidebar(): () => void;
}

const LayoutContext = createContext<LayoutContextType>({
  hasToolbar: false,
  hasSidebar: false,

  userMenu: {
    exists: false,
    opened: false,
    container: undefined,
    register: () => () => null,
    toogleOpened: () => null,
    trueOpened: () => null,
    falseOpened: () => null
  },

  registerSidebar: () => () => null,
  registerToolbar: () => () => null
});

export default LayoutContext;
