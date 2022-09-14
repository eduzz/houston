import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Avatar from '../../../Avatar';
import Button from '../../../Button';
import useOnClickOutside from '../../../hooks/useClickOutside';
import useEscapeKey from '../../../hooks/useEscapeKey';
import IconButton from '../../../IconButton';
import LayoutContext from '../../context';
import TopbarContext from '../context';

const User = React.memo<StyledProp>(({ className }) => {
  const wrapperMenuUser = React.useRef<HTMLDivElement>(null);
  const user = useContextSelector(TopbarContext, context => context.user);

  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const hasMenu = useContextSelector(LayoutContext, context => context.userMenu.exists);
  const toogleOpened = useContextSelector(LayoutContext, context => context.userMenu.toogleOpened);
  const falseOpened = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);
  const registerContainer = useContextSelector(LayoutContext, context => context.userMenu.registerContainer);

  useOnClickOutside(wrapperMenuUser, () => hasMenu && falseOpened(), [hasMenu]);
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
              variant='text'
              className='hst-topbar-user-button'
              startIcon={
                <Avatar src={user.avatar} size='sm'>
                  {user.name}
                </Avatar>
              }
              endIcon={hasMenu && <IconChevronDown className='hst-topbar-user-menu-arrow' size='md' />}
              onClick={toogleOpened}
            >
              {user.name} {!!user.isSupport && '(Suporte)'}
            </Button>
          </div>

          <div className='hst-topbar-user-mobile'>
            <IconButton onClick={toogleOpened}>
              <Avatar src={user.avatar} size='sm'>
                {user.name}
              </Avatar>
            </IconButton>
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
    margin-left: ${theme.spacing.inline.nano};
    pointer-events: none;

    &.hst-topbar-user-has-menu {
      pointer-events: all;
    }

    & .hst-topbar-user-button.--text {
      color: inherit;
    }

    & .hst-topbar-user-menu-arrow {
      display: block;
      transition: 0.15s ease-out;
    }

    &.hst-topbar-user-active .hst-topbar-user-menu-arrow {
      transform: rotateX(180deg);
    }

    & .hst-topbar-user-default {
      display: none;
      position: relative;

      & .hst-topbar-user-support {
        position: absolute;
        bottom: 0;
        left: 57px;
        right: 0;
        color: ${theme.neutralColor.low.medium};
      }
    }

    ${theme.breakpoints.up('md')} {
      & .hst-topbar-user-default {
        display: block;
      }

      & .hst-topbar-user-mobile {
        display: none;
      }
    }
  `
);
