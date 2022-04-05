import { createContext, useContext } from 'use-context-selector';

interface ISidebarMenuContext {
  expanded: string;
  handleClickExpand: (item: string) => void;
}

const MenuContext = createContext<ISidebarMenuContext>({} as ISidebarMenuContext);

export function useMenuContext() {
  return useContext(MenuContext);
}

export default MenuContext;
