import { ITabsContentProps } from './Content';
declare type ITabRegisterPick = 'id' | 'className' | 'children';
export interface ITabsContext {
    tabs: any[];
    registerTabs: (tab: Pick<ITabsContentProps, ITabRegisterPick>) => () => void;
}
declare const TabsContext: import("use-context-selector").Context<ITabsContext>;
export default TabsContext;
