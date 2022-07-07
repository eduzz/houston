import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import nestedComponent from '../../utils/nestedComponent';
import SidebarContext, { ISidebarContext } from './context';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import Wrapper from './Wrapper';

export interface ISidebarProps {
  id?: string;
  className?: string;
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
  mobileVisible?: boolean;
  /**
   * Function called when click in outside element on mobile.
   */
  onRequestClose?: () => void;
  collapsed?: boolean;
  /**
   * Whether can be collapsed.
   */
  collapsible?: boolean;
  initialCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  children?: React.ReactNode;
}

const Sidebar = ({
  currentLocation,
  hasToolbar = true,
  children,
  mobileVisible = false,
  onRequestClose,
  onCollapse,
  initialCollapsed,
  collapsed: collapsedProp,
  collapsible = true,
  ...rest
}: ISidebarProps) => {
  const [insideComponent, , setInsideComponentTrue, setInsideComponentFalse] = useBoolean(false);
  const [collapsed, setCollapsed] = React.useState(initialCollapsed ?? false);

  const isControlled = collapsedProp !== undefined;
  const isCollapsed = isControlled ? collapsedProp : collapsed;

  const handleCollapse = React.useCallback(() => {
    if (!isControlled) {
      setCollapsed(collapsed => !collapsed);
    }

    onCollapse?.(!isCollapsed);
  }, [isControlled, onCollapse, isCollapsed]);

  const contextValue = React.useMemo<ISidebarContext>(
    () => ({
      currentLocation,
      menuIsActive: (path?: string) => (!path ? false : path === currentLocation),
      hasToolbar,
      onRequestClose,
      mobileVisible,
      collapsed: isCollapsed,
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
      mobileVisible,
      isCollapsed,
      collapsible,
      handleCollapse,
      insideComponent,
      setInsideComponentTrue,
      setInsideComponentFalse
    ]
  );

  React.useEffect(() => {
    if (!mobileVisible) return;
    onRequestClose && onRequestClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  React.useEffect(() => {
    if (isCollapsed) setInsideComponentFalse();
  }, [isCollapsed, setInsideComponentFalse]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <Wrapper {...rest}>{children}</Wrapper>
    </SidebarContext.Provider>
  );
};

export default nestedComponent(Sidebar, {
  Logo,
  Menu,
  MenuItem,
  SubMenuItem
});
