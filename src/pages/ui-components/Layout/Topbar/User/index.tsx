import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import useOnClickOutside from '../../../hooks/useClickOutside';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import Typography from '../../../Typography';
import LayoutContext, { TOPBAR_HEIGHT } from '../../context';
import TopbarContext from '../context';
import Avatar from './Avatar';
import Belt from './Belt';

const User = React.memo<IStyledProp>(({ className }) => {
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
      <Belt belt={user.belt} />

      <div ref={wrapperMenuUser} className={cx(className, { '--active': hasMenu && opened, '--has-menu': hasMenu })}>
        <div className='houston-topbar-user__label' onClick={toogleOpened}>
          <Avatar name={user.name} avatar={user.avatar} />

          <Typography size='xxs' color='inherit' className='houston-topbar-user__name'>
            {user.name}
          </Typography>

          {hasMenu && (
            <div className='houston-topbar-user__menu-arrow'>
              <IconChevronDown size={18} />
            </div>
          )}
        </div>

        <div ref={registerContainer} />
      </div>
    </>
  );
});

export default styled(User, { label: 'houston-topbar-user' })(
  ({ theme }) => css`
    position: relative;
    z-index: 1100;

    &.--has-menu {
      cursor: pointer;

      &:hover,
      &.--active {
        background: rgba(0, 0, 0, 0.15);
      }

      &:focus {
        background: none;
      }
    }

    & .houston-topbar-user__label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 ${theme.spacing.xxxs};
      height: ${TOPBAR_HEIGHT}px;

      ${theme.breakpoints.down('sm')} {
        padding: 0 ${theme.spacing.nano};
      }

      & .houston-topbar-user__name {
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        ${theme.breakpoints.down('md')} {
          max-width: 120px;
        }

        ${theme.breakpoints.down('sm')} {
          display: none;
        }

        &::selection {
          background: none;
        }
      }

      & .houston-topbar-user__menu-arrow {
        margin-left: ${theme.spacing.quarck};
        transition: 0.15s ease-out;

        ${theme.breakpoints.down('sm')} {
          display: none;
        }

        span.houston-icon {
          line-height: 0;
          position: relative;
          top: 2px;
        }
      }

      &.--active .houston-topbar-user__menu-arrow {
        transform: rotate(-180deg);
      }
    }
  `
);
