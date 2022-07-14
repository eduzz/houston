import { createContext } from 'use-context-selector';

export const TOOLBAR_HEIGHT = 48;
export const TOOLBAR_DROPDOWN_WIDTH = 340;
export const TOOLBAR_MENU_WIDTH = 260;

export const SIDEBAR_WIDTH = 300;

export interface LayoutContextType {
  hasToolbar: boolean;
  registerToolbar: () => () => void;
  hasSidebar: boolean;
  registerSidebar: () => () => void;
}

const LayoutContext = createContext<LayoutContextType>({
  hasToolbar: false,
  registerToolbar: () => () => null,

  hasSidebar: false,
  registerSidebar: () => () => null
});

export default LayoutContext;
