import { createContext } from 'use-context-selector';

export interface SidebarContextType {
  isActiveItem: (to?: string) => boolean;
}

const SidebarContext = createContext<SidebarContextType>({
  isActiveItem: () => false
});

export default SidebarContext;
