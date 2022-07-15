import { createContext } from 'use-context-selector';

export interface SidebarContextType {
  isActiveItem: (to?: string) => boolean;
  onRequestClose: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isActiveItem: () => false,
  onRequestClose: () => null
});

export default SidebarContext;
