import { createContext, useContext } from 'use-context-selector';

export interface ISidebarContext {
  currentLocation?: string;
  menuIsActive: (to?: string) => boolean;
  onRequestClose?: () => void;

  mobileVisible: boolean;
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export default SidebarContext;
