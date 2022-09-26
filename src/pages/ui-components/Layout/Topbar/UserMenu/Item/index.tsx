import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp } from '@eduzz/houston-styles';

import Button from '../../../../Button';
import Typography from '../../../../Typography';
import LayoutContext from '../../../context';

export interface UserMenuItemProps extends StyledProp {
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  /**
   * Component that wraps the item.
   * @example a, NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  id?: string;
  children: string;
}

const UserMenuItem = React.forwardRef<HTMLButtonElement, UserMenuItemProps>(
  ({ id, className, icon, disabled, onClick, children, as: Tag, ...rest }, ref) => {
    const close = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick && onClick(e);
        close();
      },
      [close, onClick]
    );

    let content = (
      <Button
        id={id}
        startIcon={icon}
        ref={ref}
        fullWidth
        variant='text'
        onClick={handleClick}
        className={className}
        disabled={disabled}
      >
        <Typography color='inherit'>{children}</Typography>
      </Button>
    );

    if (Tag) {
      content = (
        <Tag id={id} {...rest}>
          {content}
        </Tag>
      );
    }

    return <>{content}</>;
  }
);

export default styled(UserMenuItem, { label: 'hst-user-menu-item' })`
  justify-content: start;
  text-align: left;

  &.hst-button-disabled {
    background-color: transparent;
  }
`;
