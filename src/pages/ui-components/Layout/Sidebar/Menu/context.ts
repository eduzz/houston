import { createContext, useContext } from 'use-context-selector';

export interface ISidebarMenuContext {
  expanded: string;
  handleClickExpand: (item: string, forceActive?: boolean) => void;
}

const MenuContext = createContext<ISidebarMenuContext>({} as ISidebarMenuContext);

export function useMenuContext() {
  return useContext(MenuContext);
}

export default MenuContext;
