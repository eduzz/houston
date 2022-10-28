import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, StyledProp } from '@eduzz/houston-ui/styled';

import Overlay from '../../Overlay';
import { useMediaQueryDown } from '../../ThemeProvider/mediaQuery/useMediaQuery';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { MENU_WIDTH, TOPBAR_HEIGHT } from '../context';
import SidebarContext, { SidebarContextType } from './context';
import Group from './Group';
import Item from './Item';

export interface SidebarProps extends StyledProp {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation: string;
  children: React.ReactNode;
}

const Sidebar = ({ currentLocation, children, className }: SidebarProps) => {
  const isMobile = useMediaQueryDown('lg');

  const hasTopbar = useContextSelector(LayoutContext, context => context.topbar.exists);
  const register = useContextSelector(LayoutContext, context => context.sidebar.register);
  const opened = useContextSelector(LayoutContext, context => context.sidebar.opened);
  const toggleMenu = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
  const falseOpened = useContextSelector(LayoutContext, context => context.sidebar.falseOpened);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  const contextValue = React.useMemo<SidebarContextType>(
    () => ({
      isActiveItem: (path?: string) => (!path ? false : path === currentLocation)
    }),
    [currentLocation]
  );

  React.useEffect(() => {
    falseOpened();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={cx(className, { 'hst-sidebar-visible': opened && isMobile, 'hst-sidebar-has-topbar': hasTopbar })}
      >
        <Overlay visible={opened && isMobile} color='high' onClick={toggleMenu} underTopbar />

        <aside className='hst-sidebar-container'>
          <nav>
            <ul>{children}</ul>
          </nav>
        </aside>
      </div>
    </SidebarContext.Provider>
  );
};

const SidebarStyled = styled(Sidebar, { label: 'hst-sidebar' })`
  ${({ theme }) => css`
    width: ${MENU_WIDTH}px;
    height: auto;
    position: relative;

    & .hst-sidebar-container {
      background-color: #fcfcfc;
      display: inline-flex;
      flex-direction: column;
      width: ${MENU_WIDTH}px;
      transition: 0.2s ease-out, top 0s;
      z-index: 104;
      flex-grow: 1;
      position: fixed;
      bottom: 0;
      left: 0;
      top: 0;
      animation-delay: 0.3s;

      a {
        text-decoration: none;
      }

      & > nav {
        overflow-y: auto;
        overflow-x: hidden;
        padding: 2rem 0 2.5rem 0;

        &::-webkit-scrollbar {
          width: 3px;
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
        }

        &:hover::-webkit-scrollbar-thumb {
          background: #e0e0e0;
        }

        ul {
          list-style-type: none;
        }
      }
    }

    &.hst-sidebar-has-topbar .hst-sidebar-container {
      top: ${TOPBAR_HEIGHT}px;
    }

    ${theme.mediaQuery.down('lg')} {
      width: 0;

      & .hst-sidebar-container {
        background-color: #fff;
        left: -${MENU_WIDTH}px;
        border: 0;
        opacity: 0;
        box-shadow: ${theme.shadow.level[1]};
      }

      &.hst-sidebar-visible .hst-sidebar-container {
        left: 0;
        opacity: 1;
      }
    }
  `}
`;

export default nestedComponent(SidebarStyled, {
  Item,
  Group
});
