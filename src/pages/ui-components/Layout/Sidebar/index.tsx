import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { breakpoints, css, cx, StyledProp } from '@eduzz/houston-styles';

import useMediaQuery from '../../hooks/useMediaQuery';
import Overlay from '../../Overlay';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { MENU_WIDTH, TOPBAR_HEIGHT, TOPBAR_HEIGHT_MOBILE } from '../context';
import SidebarContext, { SidebarContextType } from './context';
import Group from './Group';
import Item from './Item';

export interface SidebarProps extends StyledProp {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation?: string;
  children: React.ReactNode;
}

const Sidebar = ({ currentLocation, children, className }: SidebarProps) => {
  const isMobile = useMediaQuery(breakpoints.down('lg'));

  const hasTopbar = useContextSelector(LayoutContext, context => context.topbar.exists);
  const register = useContextSelector(LayoutContext, context => context.sidebar.register);
  const opened = useContextSelector(LayoutContext, context => context.sidebar.opened);
  const toggleMenu = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);

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

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={cx(className, { '--visible': opened && isMobile, '--has-topbar': hasTopbar })}>
        <Overlay visible={opened && isMobile} color='high' onClick={toggleMenu} underTopbar />

        <aside className='houston-menu__container'>
          <nav>
            <ul>{children}</ul>
          </nav>
        </aside>
      </div>
    </SidebarContext.Provider>
  );
};

const SidebarStyled = styled(Sidebar, { label: 'houston-menu' })`
  ${({ theme }) => css`
    width: ${MENU_WIDTH}px;
    height: auto;
    position: relative;

    & .houston-menu__container {
      background: #fff;
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
        padding: ${theme.spacing.stack.xs} 0;

        &::-webkit-scrollbar {
          width: 3px;
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
        }

        &:hover::-webkit-scrollbar-thumb {
          background: ${theme.neutralColor.high.medium};
        }

        ul {
          list-style-type: none;
        }
      }
    }

    &.--has-topbar .houston-menu__container {
      top: ${TOPBAR_HEIGHT}px;

      ${breakpoints.down('sm')} {
        top: ${TOPBAR_HEIGHT_MOBILE}px;
      }
    }

    ${breakpoints.down('lg')} {
      width: 0;

      & .houston-menu__container {
        left: -${MENU_WIDTH}px;
        border: 0;
        opacity: 0;
        box-shadow: ${theme.shadow.level[1]};
      }

      &.--visible .houston-menu__container {
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
