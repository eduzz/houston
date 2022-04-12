import { createContext, useContext } from 'use-context-selector';

export const SIDEBAR_WIDTH = 300;
export const SIDEBAR_WIDTH_COLLAPSED = 56;
export const TOOLBAR_HEIGHT = 48;

export interface ISidebarContext {
  currentLocation: string;
  menuIsActive: (to: string) => boolean;

  hasToolbar: boolean;
  onRequestClose: () => void;

  isMobile: boolean;
  mobileVisible: boolean;

  collapsible: boolean;
  collapsed: boolean;
  handleCollapse: () => void;

  insideComponent: boolean;
  setInsideComponentTrue: () => void;
  setInsideComponentFalse: () => void;
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export default SidebarContext;
