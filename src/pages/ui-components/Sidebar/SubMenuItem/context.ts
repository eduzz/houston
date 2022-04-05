import { createContext, useContext } from 'use-context-selector';

interface ISidebarSubMenuItemContext {
  id: string;
}

const SubMenuItemContext = createContext<ISidebarSubMenuItemContext>({} as ISidebarSubMenuItemContext);

export function useSubMenuContext() {
  return useContext(SubMenuItemContext);
}

export default SubMenuItemContext;
