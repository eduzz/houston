import * as React from 'react';

import { Button } from 'antd';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp } from '../../../../styled';
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
        icon={icon}
        ref={ref}
        block
        type='text'
        onClick={handleClick}
        className={className}
        disabled={disabled}
      >
        {children}
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
  align-items: center;
  text-align: left;
  font-size: 16px;
  padding: 8px 16px;
  display: flex;

  & > span:not(.anticon, .ant-avatar) {
    max-width: 235px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > .anticon {
    font-size: 20px;
  }

  & > svg {
    width: 24px;
    margin-right: 5px;
  }

  &.hst-button-disabled {
    background-color: transparent;
  }
`;
