import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp, css, cx } from '@eduzz/houston-styles';

import Typography from '../../../../Typography';
import LayoutContext from '../../../context';

export interface UserMenuItemProps extends IStyledProp {
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  disabled?: boolean;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ className, icon = null, disabled, onClick, children }) => {
  const close = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      onClick && onClick(e);
      close();
    },
    [close, onClick]
  );

  return (
    <div onClick={!disabled ? handleClick : undefined} className={cx(className, disabled && '--disabled')}>
      {icon && <div className='houston-user-menu-item__icon'>{icon}</div>}
      {typeof children === 'string' ? (
        <Typography size='xxs' color='inherit'>
          {children}
        </Typography>
      ) : (
        children
      )}
    </div>
  );
};

export default styled(UserMenuItem, { label: 'houston-user-menu-item' })(
  ({ theme }) => css`
    color: ${theme.neutralColor.low.pure};
    font-weight: 400;
    font-size: 14px;
    padding: ${theme.spacing.nano};
    border-radius: ${theme.spacing.quarck};
    transition: 0.15s ease-out;
    display: flex;
    align-items: center;
    line-height: 1.2;
    position: relative;

    &:not(.--disabled):hover {
      background: rgba(0, 0, 0, 0.04);
      color: ${theme.brandColor.primary.pure};
    }

    &.--disabled {
      cursor: no-drop;
      opacity: 0.3;
    }

    & .houston-user-menu-item__icon {
      line-height: 0;
      margin-right: ${theme.spacing.nano};
      font-size: 18px;

      span,
      i {
        font-size: 18px;
      }

      img {
        width: 28px;
        height: 28px;
      }
    }
  `
);
