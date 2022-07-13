import { createContext } from 'use-context-selector';

export const TOOLBAR_HEIGHT = 48;
export const TOOLBAR_DROPDOWN_WIDTH = 340;
export const TOOLBAR_MENU_WIDTH = 260;

export const SIDEBAR_WIDTH = 300;
export const SIDEBAR_WIDTH_COLLAPSED = 56;

export interface LayoutContextType {
  hasToolbar: boolean;
  registerToolbar: () => () => void;
}

const LayoutContext = createContext<LayoutContextType>({
  hasToolbar: false,
  registerToolbar: () => () => null
});

export default LayoutContext;
