import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp } from '@eduzz/houston-styles';

import Button from '../../../../Button';
import Typography from '../../../../Typography';
import LayoutContext from '../../../context';

export interface UserMenuItemProps extends StyledProp, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children: string;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ className, icon, disabled, onClick, children, ...rest }) => {
  const close = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      close();
    },
    [close, onClick]
  );

  let content = (
    <Button startIcon={icon} fullWidth variant='text' onClick={handleClick} className={className} disabled={disabled}>
      <Typography color='inherit'>{children}</Typography>
    </Button>
  );

  if (rest.href) {
    content = <a {...rest}>{content}</a>;
  }

  return <>{content}</>;
};

export default styled(UserMenuItem, { label: 'houston-user-menu-item' })`
  justify-content: start;

  &.--disabled {
    background-color: transparent;
  }
`;
