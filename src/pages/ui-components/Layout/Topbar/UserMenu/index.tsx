import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Portal from '../../../Portal';
import LayoutContext, { TOPBAR_HEIGHT, TOPBAR_MENU_WIDTH } from '../../context';

export interface UserMenuProps extends StyledProp {
  children: React.ReactNode;
}

const UserMenu: React.FC<UserMenuProps> = ({ className, children }) => {
  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const register = useContextSelector(LayoutContext, context => context.userMenu.register);
  const container = useContextSelector(LayoutContext, context => context.userMenu.container);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  if (!container) return null;

  return (
    <Portal target={container}>
      <div className={cx(className, opened && '--opened')}>{children}</div>
    </Portal>
  );
};

export default styled(UserMenu, { label: 'houston-topbar-user-menu' })(
  ({ theme }) => css`
    width: ${TOPBAR_MENU_WIDTH}px;
    position: fixed;
    top: ${TOPBAR_HEIGHT}px;
    right: ${theme.spacing.inline.nano};
    box-shadow: ${theme.shadow.level[2]};
    padding: ${theme.spacing.nano};
    transition: 0.15s ease-out;
    transform: scale(0.1);
    transform-origin: top right;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    user-select: none;
    background: white;
    border-radius: ${theme.border.radius.sm};

    &.--opened {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      user-select: auto;
    }
  `
);
