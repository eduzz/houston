import { createContext } from 'use-context-selector';

import { ITabsContentProps } from './Content';

type ITabRegisterPick = 'id' | 'className' | 'children';

export interface ITabsContext {
  tabs: any[];
  registerTabs: (tab: Pick<ITabsContentProps, ITabRegisterPick>) => () => void;
}

const TabsContext = createContext<ITabsContext>({} as ITabsContext);

export default TabsContext;
