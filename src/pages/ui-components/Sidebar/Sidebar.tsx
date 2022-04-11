import * as React from 'react';

import { Theme, useMediaQuery } from '@mui/material';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import nestedComponent from '../Helpers/nestedComponent';
import Content from './Content';
import SidebarContext, { ISidebarContext } from './context';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import Wrapper from './Wrapper';

export interface ISidebarProps {
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
  onClickOverlay?: () => void;
  collapsed?: boolean;
  /**
   * Whether can be collapsed.
   */
  collapsible?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  hasToolbar = true,
  children,
  mobileVisible,
  onClickOverlay,
  onCollapse,
  collapsed: collapsedProp = false,
  collapsible = true
}) => {
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));

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
      hasToolbar,
      onClickOverlay,
      isMobile,
      mobileVisible,
      collapsed,
      collapsible,
      handleCollapse,
      insideComponent,
      setInsideComponentTrue,
      setInsideComponentFalse
    }),
    [
      hasToolbar,
      onClickOverlay,
      collapsed,
      collapsible,
      handleCollapse,
      insideComponent,
      isMobile,
      mobileVisible,
      setInsideComponentFalse,
      setInsideComponentTrue
    ]
  );

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
};

export default nestedComponent(Sidebar, {
  Logo,
  Menu,
  MenuItem,
  SubMenuItem,
  Content,
  Wrapper
});
