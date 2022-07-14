import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import styled, { IStyledProp, cx } from '@eduzz/houston-styles/styled';

import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import LayoutContext, { LayoutContextType, TOOLBAR_HEIGHT } from './context';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

export interface ILayoutProps extends IStyledProp {
  children?: React.ReactNode;
}

const Layout = ({ className, children }: ILayoutProps) => {
  const [hasToolbar, setHasToolbar] = React.useState(false);
  const [hasSidebar, setHasSidebar] = React.useState(false);
  const [hasUserMenu, setHasUserMenu] = React.useState(false);

  const [userMenuOpened, toogleUserMenuOpened, trueUserMenuOpened, falseUserMenuOpened] = useBoolean(false);
  const userMenuContainerRef = React.createRef<HTMLDivElement>();

  const registerToolbar = React.useCallback(() => {
    setHasToolbar(true);
    return () => setHasToolbar(false);
  }, []);

  const registerSidebar = React.useCallback(() => {
    setHasSidebar(true);
    return () => setHasSidebar(false);
  }, []);

  const setHasUserMenu = React.useCallback(() => {
    setHasSidebar(true);
    return () => setHasSidebar(false);
  }, []);

  const contextValue = React.useMemo<LayoutContextType>(
    () => ({
      hasToolbar,
      registerToolbar,
      hasSidebar,
      registerSidebar,
      userMenu: {
        opened: userMenuOpened,
        container: userMenuContainerRef,
exists: hasUserMenu,
setExists: sethas
        toogleOpened: toogleUserMenuOpened,
        trueOpened: trueUserMenuOpened,
        falseOpened: falseUserMenuOpened
      }
    }),
    [
      falseUserMenuOpened,
      hasSidebar,
      hasToolbar,
      registerSidebar,
      registerToolbar,
      toogleUserMenuOpened,
      trueUserMenuOpened,
      userMenuContainerRef,
      userMenuOpened
    ]
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={cx(className, { '--hasToolbar': hasToolbar })}>{children}</div>
    </LayoutContext.Provider>
  );
};

const LayoutWrapper = styled(Layout, { label: 'houston-layout' })`
  display: flex;
  width: 100%;

  &.--hasToolbar {
    padding-top: ${TOOLBAR_HEIGHT}px;
  }
`;

export default nestedComponent(LayoutWrapper, {
  Sidebar,
  Content,
  Toolbar
});
