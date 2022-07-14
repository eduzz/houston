import Content from './Content';
import Layout from './Layout';
import Sidebar, { SidebarProps as SidebarPropsExport } from './Sidebar';
import Toolbar, { ToolbarProps as ToolbarPropsExport } from './Toolbar';

export { Sidebar, Content, Toolbar };
export type SidebarProps = SidebarPropsExport;
export type ToolbarProps = ToolbarPropsExport;

export default Layout;
