import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import LayoutContext, { TOOLBAR_HEIGHT, TOOLBAR_MENU_WIDTH } from '../../context';

export interface UserMenuProps extends IStyledProp {
  children: React.ReactNode;
}

const UserMenu: React.FC<UserMenuProps> = ({ className, children }) => {
  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const register = useContextSelector(LayoutContext, context => context.userMenu.register);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  return <div className={cx(className, opened && '--opened')}>{children}</div>;
};

export default styled(UserMenu, { label: 'houston-toolbar-user-menu' })(
  ({ theme }) => css`
    width: ${TOOLBAR_MENU_WIDTH}px;
    position: fixed;
    top: ${TOOLBAR_HEIGHT}px;
    right: 0;
    box-shadow: ${theme.shadow.level[1]};
    padding: ${theme.spacing.nano};
    transition: 0.15s ease-out;
    transform: scale(0.1);
    transform-origin: top right;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    user-select: none;
    background: white;
    border-radius: 0 0 ${theme.spacing.quarck} ${theme.spacing.quarck};

    &.--opened {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      user-select: auto;
    }
  `
);
