import { createContext } from 'use-context-selector';

export interface SidebarGroupContextType {
  onItemActive: () => void;
}

const SidebarGroupContext = createContext<SidebarGroupContextType>({
  onItemActive: () => null
});

export default SidebarGroupContext;
