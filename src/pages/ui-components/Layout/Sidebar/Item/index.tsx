import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Bullet from '@eduzz/houston-icons/Bullet';
import styled, { cx, css, StyledProp } from '@eduzz/houston-ui/styled';

import Typography from '../../../Typography';
import SidebarContext from '../context';
import SidebarGroupContext from '../Group/context';

export interface SidebarItemProps extends StyledProp {
  [key: string]: any;
  id?: string;
  tabIndex?: number;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
}

const SidebarItem = ({
  className,
  children,
  isActive: isActiveProp,
  tabIndex,
  as: Component,
  disabled,
  to,
  ...rest
}: SidebarItemProps) => {
  const isActiveItem = useContextSelector(SidebarContext, context => context.isActiveItem);
  const onItemActive = useContextSelector(SidebarGroupContext, context => context.onItemActive);

  const active = isActiveProp ?? isActiveItem(to);

  React.useEffect(() => {
    if (!active) return;
    onItemActive();
  }, [active, onItemActive]);

  return React.createElement(
    Component ?? 'a',
    {
      ...rest,
      to,
      tabIndex: tabIndex ?? 1,
      className: cx(className, { 'hst-sidebar-item-active': active, 'hst-sidebar-item-disabled': disabled })
    },
    <li>
      <Bullet className='hst-sidebar-item-icon' size='md' />

      <Typography
        className='hst-sidebar-item-label'
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

export default styled(React.memo(SidebarItem), { label: 'hst-sidebar-item' })(
  ({ theme }) => css`
    transition: 0.15s linear;
    display: block;
    outline: none;
    user-select: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-right: 5px;

    &:focus-visible {
      background-color: rgba(0, 0, 0, 0.03);
      box-shadow: 0 0 0 2px ${theme.feedbackColor.informative.pure} inset;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }

    & > li {
      padding: 0.07rem 1rem;
      align-items: center;
      line-height: 1.2;
      cursor: pointer;
      display: grid;
      grid-template-columns: ${theme.pxToRem(26)}rem 1fr;
      grid-gap: 0.5rem;
      text-decoration: none;
      white-space: nowrap;

      & .hst-sidebar-item-label {
        grid-column: 2;
        transition: 0.15s ease-in;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
        font-size: 15.5px;
      }

      & .hst-sidebar-item-icon {
        transform: scale(0);
        opacity: 0;
        transition: 0.15s ease-in;
        color: ${theme.brandColor.secondary.pure};
      }
    }

    &.hst-sidebar-item-active > li {
      &::before {
        background: ${theme.brandColor.secondary.pure};
      }

      & .hst-sidebar-item-icon {
        transform: scale(1);
        opacity: 1;
      }
    }

    &.hst-sidebar-item-disabled {
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
    }
  `
) as typeof SidebarItem;
