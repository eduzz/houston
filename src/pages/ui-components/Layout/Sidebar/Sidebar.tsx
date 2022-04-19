import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import nestedComponent from '../../Helpers/nestedComponent';
import SidebarContext, { ISidebarContext } from './context';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import Wrapper from './Wrapper';

export interface ISidebarProps {
  /**
   * Current location path, if you are using react-router-dom use useLocation
   */
  currentLocation?: string;
  /**
   * Applies a margin to the top of the Sidebar.
   */
  hasToolbar?: boolean;
  /**
   * Mobile display control.
   */
  mobileVisible: boolean;
  /**
   * Function called when click in outside element on mobile.
   */
  onRequestClose?: () => void;
  collapsed?: boolean;
  /**
   * Whether can be collapsed.
   */
  collapsible?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = ({
  currentLocation,
  hasToolbar = true,
  children,
  mobileVisible,
  onRequestClose,
  onCollapse,
  collapsed: collapsedProp = false,
  collapsible = true
}) => {
  const [insideComponent, , setInsideComponentTrue, setInsideComponentFalse] = useBoolean(false);
  const [collapsed, setCollapsed] = React.useState(collapsedProp ?? false);

  const handleCollapse = React.useCallback(() => {
    setCollapsed(v => {
      const currentValue = !v;
      onCollapse && onCollapse(currentValue);
      return currentValue;
    });
  }, [onCollapse]);

  const contextValue = React.useMemo<ISidebarContext>(
    () => ({
      currentLocation,
      menuIsActive: (path: string) => (!path ? false : path === currentLocation || currentLocation?.startsWith(path)),
      hasToolbar,
      onRequestClose,
      mobileVisible,
      collapsed,
      collapsible,
      handleCollapse,
      insideComponent,
      setInsideComponentTrue,
      setInsideComponentFalse
    }),
    [
      currentLocation,
      hasToolbar,
      onRequestClose,
      collapsed,
      collapsible,
      handleCollapse,
      insideComponent,
      mobileVisible,
      setInsideComponentFalse,
      setInsideComponentTrue
    ]
  );

  React.useEffect(() => {
    if (!mobileVisible) return;
    onRequestClose && onRequestClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
};

export default nestedComponent(Sidebar, {
  Logo,
  Menu,
  MenuItem,
  SubMenuItem,
  Wrapper
});
