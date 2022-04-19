import { createContext, useContext } from 'use-context-selector';

export interface ISidebarSubMenuItemContext {
  ref: string;
  registerItem: (isActive: boolean) => () => void;
}

const SubMenuItemContext = createContext<ISidebarSubMenuItemContext>({
  ref: '',
  registerItem: () => () => null
});

export function useSubMenuContext() {
  return useContext(SubMenuItemContext);
}

export default SubMenuItemContext;
