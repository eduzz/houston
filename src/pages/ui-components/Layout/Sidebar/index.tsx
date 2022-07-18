import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { breakpoints, css, cx, IStyledProp } from '@eduzz/houston-styles';

import Overlay from '../../Overlay';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { MENU_WIDTH, TOPBAR_HEIGHT } from '../context';
import SidebarContext, { SidebarContextType } from './context';
import Group from './Group';
import Item from './Item';

export interface SidebarProps extends IStyledProp {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation?: string;
  children: React.ReactNode;
}

const Sidebar = ({ currentLocation, children, className }: SidebarProps) => {
  const hasTopbar = useContextSelector(LayoutContext, context => context.topbar.exists);
  const register = useContextSelector(LayoutContext, context => context.sidebar.register);
  const opened = useContextSelector(LayoutContext, context => context.sidebar.opened);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  const onRequestClose = () => null;

  const contextValue = React.useMemo<SidebarContextType>(
    () => ({
      isActiveItem: (path?: string) => (!path ? false : path === currentLocation),
      onRequestClose
    }),
    [currentLocation]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={cx(className, { '--visible': opened, '--has-topbar': hasTopbar })}>
        <Overlay visible={opened} color='high' onClick={onRequestClose} underTopbar />

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
      padding: ${theme.spacing.stack.xs} 0;
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

        &::-webkit-scrollbar {
          width: 3px;
          background: white;
        }

        &::-webkit-scrollbar-thumb {
          background: ${theme.neutralColor.high.medium};
          border-radius: 4px;
        }

        ul {
          list-style-type: none;
        }
      }
    }

    &.--has-topbar .houston-menu__container {
      top: ${TOPBAR_HEIGHT}px;
    }

    ${breakpoints.down('md')} {
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
