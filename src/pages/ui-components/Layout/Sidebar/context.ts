import { createContext, useContext } from 'use-context-selector';

export interface ISidebarContext {
  currentLocation?: string;
  menuIsActive: (to?: string) => boolean;

  hasToolbar: boolean;
  onRequestClose?: () => void;

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
