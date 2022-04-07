import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '../../styles/styled';
import useSidebar from '../hooks';
import SubMenuItemContext from '../SubMenuItem/context';

export interface ISidebarMenuItem extends IStyledProp {
  id?: string;
  tabIndex?: number;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  to?: string;
}

const SidebarMenuItem: React.FC<ISidebarMenuItem> = ({
  className,
  children,
  icon,
  isActive: isActiveProp,
  tabIndex = 1,
  as: Component,
  to,
  ...rest
}) => {
  const identifierSubMenu = useContextSelector(SubMenuItemContext, context => context.id);

  // TODO
  const { isActive } = useSidebar({ pathname: window.location.pathname });
  const active = isActiveProp === undefined && to ? isActive(to) : isActiveProp;

  if (Component) {
    return (
      <Component {...rest} to={to}>
        <li tabIndex={tabIndex} className={clsx(className, identifierSubMenu && '--submenu', active && '--active')}>
          {icon && !identifierSubMenu && <div className='icon'>{icon}</div>}
          <div className='label'>{children}</div>
        </li>
      </Component>
    );
  }

  return (
    <li
      {...rest}
      tabIndex={tabIndex}
      className={clsx(className, identifierSubMenu && '--submenu', active && '--active')}
    >
      {icon && <div className='icon'>{icon}</div>}
      <div className='label'>{children}</div>
    </li>
  );
};

export default styled(React.memo(SidebarMenuItem), { label: 'houston-menu-item' })`
  padding: 16px;
  display: flex;
  align-items: center;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.15s linear;
  color: #666666;
  text-decoration: none;
  outline-color: ${({ theme }) => theme.colors.primary.main};
  white-space: nowrap;

  .icon {
    line-height: 0;
    margin-right: 16px;

    svg,
    img {
      font-size: 24px;
      width: 24px;
    }
  }

  .label {
    font-size: 14px;
    padding-right: 16px;
    font-weight: 500;
    transition: 0.1s linear;

    &::selection {
      background: transparent;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.12);
  }

  &.--active {
    color: ${({ theme }) => theme.colors.primary.main};

    &::before {
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }

  &.--submenu {
    &::before {
      content: '';
      width: 8px;
      min-width: 8px;
      height: 8px;
      min-height: 8px;
      border: 1px solid #666666;
      margin-right: 24px;
      margin-left: 8px;
      border-radius: 50%;
    }

    .label {
      font-weight: 400;
    }
  }
`;
