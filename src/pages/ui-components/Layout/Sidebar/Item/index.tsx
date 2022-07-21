import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Bullet from '@eduzz/houston-icons/Bullet';
import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';

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
    { ...rest, to, tabIndex: tabIndex ?? 1, className: cx(className, { '--active': active, '--disabled': disabled }) },
    <li>
      <Bullet className='houston-sidebar-item__icon' size='md' />
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
    transition: 0.15s linear;
    display: block;
    outline: none;

    &:focus {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      box-shadow: 0 0 0 ${theme.border.width.sm} ${theme.feedbackColor.informative.pure} inset;
    }

    &:hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }

    & > li {
      padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.xxxs};
      align-items: center;
      line-height: 1.2;
      cursor: pointer;
      display: grid;
      grid-template-columns: ${theme.pxToRem(26)}rem 1fr;
      grid-gap: ${theme.spacing.inline.nano};
      text-decoration: none;
      white-space: nowrap;
      margin-bottom: ${theme.spacing.stack.xxxs};

      & .houston-sidebar-item__label {
        grid-column: 2;
        transition: 0.15s ease-in;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
      }

      & .houston-sidebar-item__icon {
        transform: scale(0);
        opacity: 0;
        transition: 0.15s ease-in;
        color: ${theme.brandColor.secondary.pure};
      }
    }

    &.--active > li {
      &::before {
        background: ${theme.brandColor.secondary.pure};
      }

      & .houston-sidebar-item__icon {
        transform: scale(1);
        opacity: 1;
      }
    }

    &.--disabled {
      opacity: ${theme.opacity.level[6]};
      pointer-events: none;
    }
  `
  // Por causa da prop `[key: string]` estava perdendo as outras props definidas
) as typeof SidebarItem;
