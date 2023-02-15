import * as React from 'react';

import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Avatar } from 'antd';

import { useContextSelector } from 'use-context-selector';

import useClickOutside from '../../../hooks/useClickOutside';
import useEscapeKey from '../../../hooks/useEscapeKey';
import styled, { css, cx, StyledProp } from '../../../styled';
import LayoutContext from '../../context';
import TopbarContext from '../context';

const User = React.memo<StyledProp>(({ className }) => {
  const wrapperMenuUser = React.useRef<HTMLDivElement>(null);
  const user = useContextSelector(TopbarContext, context => context.user);

  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const hasMenu = useContextSelector(LayoutContext, context => context.userMenu.exists);
  const toogleOpened = useContextSelector(LayoutContext, context => context.userMenu.toogleOpened);
  const falseOpened = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);
  const registerContainer = useContextSelector(LayoutContext, context => context.userMenu.registerContainerPortal);

  useClickOutside(wrapperMenuUser, () => hasMenu && falseOpened(), [hasMenu]);
  useEscapeKey(() => hasMenu && falseOpened(), [hasMenu]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div
        ref={wrapperMenuUser}
        className={cx(className, { 'hst-topbar-user-active': hasMenu && opened, 'hst-topbar-user-has-menu': hasMenu })}
      >
        <div className='hst-topbar-user-label'>
          <div className='hst-topbar-user-default'>
            <Button
              className='hst-topbar-user-button'
              icon={<Avatar src={user.avatar}>{user.name?.charAt(0)}</Avatar>}
              type='text'
              shape='round'
              onClick={toogleOpened}
            >
              <span className='hst-topbar-user-name'>
                {user.name} {!!user.isSupport && '(Suporte)'}
              </span>
              {hasMenu && <CaretDownOutlined className='hst-topbar-user-menu-arrow' />}
            </Button>
          </div>

          <div className='hst-topbar-user-mobile'>
            <Avatar src={user.avatar} onClick={toogleOpened}>
              {user.name?.charAt(0)}
            </Avatar>
          </div>
        </div>

        <div ref={registerContainer} />
      </div>
    </>
  );
});

export default styled(User, { label: 'hst-topbar-user' })(
  ({ theme }) => css`
    position: relative;
    z-index: 1100;
    margin-left: 8px;
    pointer-events: none;

    &.hst-topbar-user-has-menu {
      pointer-events: all;
    }

    & .hst-topbar-user-menu-arrow {
      transition: 0.15s ease-out;
    }

    &.hst-topbar-user-active {
      & .hst-topbar-user-button {
        background-color: rgba(0, 0, 0, 0.05);
      }

      & .hst-topbar-user-menu-arrow {
        transform: rotate(-180deg);
        margin-bottom: 0;
        margin-top: -5px;
      }
    }

    & .hst-topbar-user-default {
      display: none;
      position: relative;

      & .hst-topbar-user-button {
        display: flex;
        gap: 5px;
        align-items: center;
        padding: 10.5px 10.5px 10.5px 6px;

        & .ant-avatar {
          background-color: ${theme.primaryColor};
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 0;
          margin-right: 0;
        }

        & .hst-topbar-user-name {
          max-width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: bold;
          font-size: 16px;
        }

        & .anticon {
          font-size: 12px;
          margin-bottom: -5px;
        }
      }
    }

    ${theme.mediaQuery.up('lg')} {
      & .hst-topbar-user-default {
        display: block;
      }

      & .hst-topbar-user-mobile {
        display: none;
      }
    }
  `
);
