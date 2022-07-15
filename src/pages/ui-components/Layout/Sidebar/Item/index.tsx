import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Bullet from '@eduzz/houston-icons/Bullet';
import styled, { cx, css, IStyledProp } from '@eduzz/houston-styles';

import Typography from '../../../Typography';
import SidebarContext from '../context';
import SidebarGroupContext from '../Group/context';

export interface SidebarItemProps extends IStyledProp {
  [key: string]: any;
  id?: string;
  tabIndex?: number;
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
}

const SidebarItem = ({
  className,
  children,
  isActive: isActiveProp,
  tabIndex = 1,
  as: Component,
  to,
  ...rest
}: SidebarItemProps) => {
  const isActiveItem = useContextSelector(SidebarContext, context => context.isActiveItem);
  const onItemActive = useContextSelector(SidebarGroupContext, context => context.onItemActive);

  const active = isActiveProp ?? isActiveItem(to);

  React.useEffect(() => {
    if (!active) return;
    return onItemActive();
  }, [active, onItemActive]);

  return React.createElement(
    Component ?? 'div',
    { ...rest, to },
    <li tabIndex={tabIndex} className={cx(className, active && '--active')}>
      <Bullet className='houston-sidebar-item__icon' />
      <Typography
        className='houston-sidebar-item__label'
        size='xs'
        color='neutralColor.low.pure'
        lineHeight='lg'
        weight={active ? 'bold' : 'regular'}
      >
        {children}
      </Typography>
    </li>
  );
};

export default styled(React.memo(SidebarItem), { label: 'houston-sidebar-item' })(
  ({ theme }) => css`
    padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.xxxs};
    display: flex;
    align-items: center;
    line-height: 1.2;
    cursor: pointer;
    transition: 0.15s linear;
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    text-decoration: none;
    outline-color: ${theme.brandColor.primary.pure};
    white-space: nowrap;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }

    &.--active {
      &::before {
        background: ${theme.brandColor.primary.pure};
      }
    }

    & .houston-sidebar-item__label {
      grid-column: 2;
      transition: 0.15s ease-in;
    }

    & .houston-sidebar-item__icon {
      transform: scale(0);
      opacity: 0;
    }
  `
);
