import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Portal from '../../../Portal';
import styled, { css, cx, StyledProp } from '../../../styled';
import LayoutContext, { TOPBAR_MENU_MIN_WIDTH_IN_PX } from '../../context';

export type UserMenuProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
  };

const UserMenu = ({ className, children, ...rest }: UserMenuProps) => {
  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const register = useContextSelector(LayoutContext, context => context.userMenu.register);
  const container = useContextSelector(LayoutContext, context => context.userMenu.containerPortal);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  if (!container) return null;

  return (
    <Portal target={container}>
      <div className={cx(className, opened && 'hst-topbar-user-menu-opened')} {...rest}>
        {children}
      </div>
    </Portal>
  );
};

export default styled(UserMenu, { label: 'hst-topbar-user-menu' })(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    min-width: ${theme.pxToRem(TOPBAR_MENU_MIN_WIDTH_IN_PX)}rem;
    max-height: calc(95vh - ${theme.pxToRem(theme.components.topBarHeight)}rem);
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    top: ${theme.pxToRem(theme.components.topBarHeight)}rem;
    right: 0.5rem;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
    padding: 0.5rem;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    user-select: none;
    background: ${theme.antd.colorBgElevated};
    border-radius: 0 0 0.5rem 0.5rem;

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

    &.hst-topbar-user-menu-opened {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      user-select: auto;
    }
  `
);
