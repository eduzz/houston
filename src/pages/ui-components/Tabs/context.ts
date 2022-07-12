import * as React from 'react';

import { createContext } from 'use-context-selector';

export interface ITabsContext {
  tabs: Array<{ id?: string; children: React.ReactNode; className?: string; disablePadding?: boolean; key: string }>;
  registerTabs: (tab: {
    id?: string;
    children: React.ReactNode;
    className?: string;
    disablePadding?: boolean;
  }) => () => void;
}

const TabsContext = createContext<ITabsContext>({} as ITabsContext);

export default TabsContext;
