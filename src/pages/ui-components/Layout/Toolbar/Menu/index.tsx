import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import { TOOLBAR_HEIGHT, TOOLBAR_MENU_WIDTH } from '../../../context';
import UserMenuContext, { UserMenuContextType } from './context';

export interface UserMenuProps extends IStyledProp {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const UserMenu: React.FC<UserMenuProps> = ({ className, children, opened, onClose }) => {
  const contextValue = React.useMemo<UserMenuContextType>(() => ({ close: onClose }), [onClose]);

  return (
    <UserMenuContext.Provider value={contextValue}>
      <div className={cx(className, opened && '--opened')}>{children}</div>
    </UserMenuContext.Provider>
  );
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
