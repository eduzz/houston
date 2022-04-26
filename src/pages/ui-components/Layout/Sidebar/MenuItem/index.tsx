import * as React from 'react';

import { cx } from '@eduzz/houston-styles';
import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '@eduzz/houston-styles/styled';

import SidebarContext from '../context';
import SubMenuItemContext from '../SubMenuItem/context';

export interface ISidebarMenuItem extends IStyledProp {
  id?: string;
  tabIndex?: number;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  to?: string;

  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
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
  const refSubMenu = useContextSelector(SubMenuItemContext, context => !!context.ref);
  const registerItem = useContextSelector(SubMenuItemContext, context => context.registerItem);
  const menuIsActive = useContextSelector(SidebarContext, context => context.menuIsActive);

  const active = isActiveProp ?? menuIsActive(to);

  React.useEffect(() => {
    return registerItem(active);
  }, [active, registerItem]);

  return React.createElement(
    Component ?? 'div',
    { ...rest, to },
    <li tabIndex={tabIndex} className={cx(className, refSubMenu && '--submenu', active && '--active')}>
      {icon && !refSubMenu && <div className='icon'>{icon}</div>}
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
  outline-color: ${({ theme }) => theme.brandColor.primary.pure};
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
    color: ${({ theme }) => theme.brandColor.primary.pure};

    &::before {
      background: ${({ theme }) => theme.brandColor.primary.pure};
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
