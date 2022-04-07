import * as React from 'react';

import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';

import nestedComponent from '../Helpers/nestedComponent';
import styled, { IStyledProp } from '../styles/styled';
import useHoustonTheme from '../styles/useHoustonTheme';
import Collapse from './Collapse';
import SidebarContext from './context';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Overlay from './Overlay';
import SubMenuItem from './SubMenuItem';

export const SIDEBAR_WIDTH = 300;
export const SIDEBAR_WIDTH_COLLAPSED = 56;
export const TOOLBAR_HEIGHT = 48;

export interface ISidebarProps extends IStyledProp {
  id?: string;
  /**
   * Applies a margin to the top of the Sidebar.
   */
  hasToolbar?: boolean;
  /**
   * Mobile display control.
   */
  visible: boolean;
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
  className,
  hasToolbar = true,
  children,
  visible,
  onClickOverlay,
  onCollapse,
  collapsed: collapsedProp = false,
  collapsible = true,
  ...rest
}) => {
  const theme = useHoustonTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [collapsed, setCollapsed] = React.useState(collapsedProp ?? false);
  const [insideComponent, setInsideComponent] = React.useState(false);

  const handleCollapse = React.useCallback(() => {
    setCollapsed(v => {
      const currentValue = !v;
      onCollapse && onCollapse(currentValue);
      return currentValue;
    });
  }, [onCollapse]);

  // TODO: será que é o melhor jeito (???)
  const handleOverComponent = React.useCallback(() => setInsideComponent(true), []);
  const handleLeaveComponent = React.useCallback(() => setInsideComponent(false), []);

  const overlayProps = React.useMemo(
    () => ({
      visible,
      onClick: onClickOverlay
    }),
    [onClickOverlay, visible]
  );

  return (
    <SidebarContext.Provider value={{ collapsed, handleCollapse, isMobile, insideComponent }}>
      <aside
        {...rest}
        onMouseOver={handleOverComponent}
        onMouseLeave={handleLeaveComponent}
        className={clsx(className, visible && '--visible', hasToolbar && '--has-toolbar', collapsed && '--collapsed')}
      >
        {collapsible && <Collapse />}
        {children}
      </aside>

      <Overlay {...overlayProps} />
    </SidebarContext.Provider>
  );
};

const NavigationComponent = styled(React.memo(Sidebar), { label: 'houston-sidebar' })`
  background: #fff;
  display: inline-flex;
  flex-direction: column;
  width: ${SIDEBAR_WIDTH}px;
  height: calc(100vh - ${TOOLBAR_HEIGHT}px);
  border-right: 1px solid #e0e0e0;
  transition: 0.2s linear;
  padding-bottom: 12px;
  z-index: 104;
  position: relative;
  flex-grow: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  animation-delay: 0.3s;

  ${({ theme }) => theme.breakpoints.down('md')} {
    left: -${SIDEBAR_WIDTH}px;
    padding: 12px 0;
    border: 0;
    opacity: 0;
  }

  &:hover {
    #houston-sidebar-collapse {
      opacity: 1;
    }
  }

  &.--collapsed {
    width: ${SIDEBAR_WIDTH_COLLAPSED}px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      width: ${SIDEBAR_WIDTH}px;
    }

    ul {
      li {
        .label,
        .arrow {
          opacity: 0;

          ${({ theme }) => theme.breakpoints.down('md')} {
            opacity: 1;
          }
        }
      }
    }

    &:hover {
      width: ${SIDEBAR_WIDTH}px;

      ul {
        li {
          .label,
          .arrow {
            opacity: 1;
          }
        }
      }
    }
  }

  &.--has-toolbar {
    height: calc(100vh - ${TOOLBAR_HEIGHT}px);

    ${({ theme }) => theme.breakpoints.down('md')} {
      height: 100vh;
    }
  }

  &.--visible {
    ${({ theme }) => theme.breakpoints.down('md')} {
      left: 0;
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default nestedComponent(NavigationComponent, {
  Logo,
  Menu,
  MenuItem,
  SubMenuItem
});
