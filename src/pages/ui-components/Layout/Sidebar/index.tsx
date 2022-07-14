import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { SIDEBAR_WIDTH, TOOLBAR_HEIGHT } from '../context';
import SidebarContext, { ISidebarContext } from './context';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';

export interface SidebarProps extends IStyledProp {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation?: string;
  children: React.ReactNode;
}

const Sidebar = ({ currentLocation, children, className }: SidebarProps) => {
  const hasToolbar = useContextSelector(LayoutContext, context => context.hasToolbar);
  const registerSidebar = useContextSelector(LayoutContext, context => context.registerSidebar);

  React.useEffect(() => {
    const unregister = registerSidebar();
    return () => unregister();
  }, [registerSidebar]);

  const visible = true;
  const onRequestClose = () => null;

  const contextValue = React.useMemo<ISidebarContext>(
    () => ({
      currentLocation,
      menuIsActive: (path?: string) => (!path ? false : path === currentLocation),
      onRequestClose,
      mobileVisible: false
    }),
    [currentLocation]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={cx(className, {
          '--visible': visible,
          '--has-toolbar': hasToolbar
        })}
      >
        <aside className='__sidebar'>{children}</aside>

        <div
          onClick={onRequestClose}
          className={cx('__overlay', { '--visible': visible, '--has-toolbar': hasToolbar })}
        />
      </div>
    </SidebarContext.Provider>
  );
};

const SidebarStyled = styled(Sidebar, { label: 'houston-sidebar' })`
  ${() => css`
    width: ${SIDEBAR_WIDTH}px;
    height: auto;
    position: relative;

    & > .__sidebar {
      background: #fff;
      display: inline-flex;
      flex-direction: column;
      width: ${SIDEBAR_WIDTH}px;
      border-right: 1px solid #e0e0e0;
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
    }

    & > .__overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: -1;
      transition: 0.1s linear, top 0s;
      opacity: 0;
      visibility: hidden;
      user-select: none;
    }

    &.--has-toolbar {
      & > .__sidebar,
      & > .__overlay {
        top: ${TOOLBAR_HEIGHT}px;
      }
    }

    // i'm not using breakpoint do be equal to the app toolbar menu icon
    @media screen and (max-width: 900px) {
      width: 0;

      & > .__sidebar {
        left: -${SIDEBAR_WIDTH}px;
        border: 0;
        opacity: 0;
      }

      &.--visible {
        & > .__sidebar {
          left: 0;
          opacity: 1;
        }

        & > .__overlay {
          opacity: 1;
          visibility: visible;
          user-select: auto;
          z-index: 102;
        }
      }
    }
  `}
`;

export default nestedComponent(SidebarStyled, {
  Menu,
  MenuItem,
  SubMenuItem
});
