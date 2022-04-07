import { createContext, useContext } from 'use-context-selector';

interface ISidebarContext {
  isMobile: boolean;

  collapsed: boolean;
  handleCollapse: () => void;

  insideComponent: boolean;
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export default SidebarContext;
