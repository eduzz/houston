import * as React from 'react';

import styled from '@emotion/styled';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import { breakpoints, cx, StyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import LayoutContext, { LayoutContextType, TOPBAR_HEIGHT, TOPBAR_HEIGHT_MOBILE } from './context';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export interface LayoutProps extends StyledProp {
  children?: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  const [hasTopbar, setHasTopbar] = React.useState(false);
  const [hasSidebar, setHasSidebar] = React.useState(false);
  const [hasUserMenu, setHasUserMenu] = React.useState(false);
  const [userMenuContainer, setUserMenuContainer] = React.useState<HTMLDivElement | null>(null);

  const [userMenuOpened, toogleUserMenuOpened, trueUserMenuOpened, falseUserMenuOpened] = useBoolean(false);
  const [sidebarOpened, toogleSidebarOpened, trueSidebarOpened, falseSidebarOpened] = useBoolean(false);

  const registerTopbar = React.useCallback(() => {
    setHasTopbar(true);
    return () => setHasTopbar(false);
  }, []);

  const registerSidebar = React.useCallback(() => {
    setHasSidebar(true);
    return () => setHasSidebar(false);
  }, []);

  const registerUserMenu = React.useCallback(() => {
    setHasUserMenu(true);
    return () => setHasUserMenu(false);
  }, []);

  const registerUserMenuContainer = React.useCallback((div: HTMLDivElement) => {
    setUserMenuContainer(div);
  }, []);

  const contextValue = React.useMemo<LayoutContextType>(
    () => ({
      topbar: {
        exists: hasTopbar,
        register: registerTopbar
      },
      sidebar: {
        exists: hasSidebar,
        opened: sidebarOpened,
        register: registerSidebar,
        toogleOpened: toogleSidebarOpened,
        trueOpened: trueSidebarOpened,
        falseOpened: falseSidebarOpened
      },
      userMenu: {
        opened: userMenuOpened,
        container: userMenuContainer,
        exists: hasUserMenu,
        register: registerUserMenu,
        registerContainer: registerUserMenuContainer,
        toogleOpened: toogleUserMenuOpened,
        trueOpened: trueUserMenuOpened,
        falseOpened: falseUserMenuOpened
      }
    }),
    [
      falseSidebarOpened,
      falseUserMenuOpened,
      hasSidebar,
      hasTopbar,
      hasUserMenu,
      registerSidebar,
      registerTopbar,
      registerUserMenu,
      registerUserMenuContainer,
      sidebarOpened,
      toogleSidebarOpened,
      toogleUserMenuOpened,
      trueSidebarOpened,
      trueUserMenuOpened,
      userMenuContainer,
      userMenuOpened
    ]
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={cx(className, { '--hasTopbar': hasTopbar })}>{children}</div>
    </LayoutContext.Provider>
  );
};

const LayoutWrapper = styled(Layout, { label: 'houston-layout' })`
  display: flex;
  width: 100%;

  &.--hasTopbar {
    padding-top: ${TOPBAR_HEIGHT}px;

    ${breakpoints.down('sm')} {
      padding-top: ${TOPBAR_HEIGHT_MOBILE}px;
    }
  }
`;

export default nestedComponent(LayoutWrapper, {
  Sidebar,
  Content,
  Topbar
});
