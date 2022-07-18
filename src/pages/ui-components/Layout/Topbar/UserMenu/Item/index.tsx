import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '@eduzz/houston-styles';

import Button from '../../../../Button';
import Typography from '../../../../Typography';
import LayoutContext from '../../../context';

export interface UserMenuItemProps extends IStyledProp {
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ className, icon, disabled, onClick, children }) => {
  const close = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      close();
    },
    [close, onClick]
  );

  return (
    <Button startIcon={icon} fullWidth variant='text' onClick={handleClick} className={className} disabled={disabled}>
      {typeof children === 'string' ? <Typography color='inherit'>{children}</Typography> : children}
    </Button>
  );
};

export default styled(UserMenuItem, { label: 'houston-user-menu-item' })`
  justify-content: start;

  &.--disabled {
    background-color: transparent;
  }
`;
