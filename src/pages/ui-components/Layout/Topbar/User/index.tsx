import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Button from '../../../Button';
import useOnClickOutside from '../../../hooks/useClickOutside';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import IconButton from '../../../IconButton';
import LayoutContext from '../../context';
import TopbarContext from '../context';
import Avatar from './Avatar';

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
      {/* <Belt belt={user.belt} /> */}

      <div ref={wrapperMenuUser} className={cx(className, { '--active': hasMenu && opened, '--has-menu': hasMenu })}>
        <div className='houston-topbar-user__label'>
          <div className='houston-topbar-user__default'>
            <Button
              variant='text'
              color='inherit'
              startIcon={<Avatar name={user.name} avatar={user.avatar} />}
              endIcon={hasMenu && <IconChevronDown className='houston-topbar-user__menu-arrow' size={16} />}
              onClick={toogleOpened}
            >
              {user.name}
            </Button>
          </div>

          <div className='houston-topbar-user__mobile'>
            <IconButton onClick={toogleOpened}>
              <Avatar name={user.name} avatar={user.avatar} />
            </IconButton>
          </div>
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
    margin-left: ${theme.spacing.inline.nano};

    & .houston-topbar-user__menu-arrow {
      display: block;
      transition: 0.15s ease-out;
    }

    &.--active .houston-topbar-user__menu-arrow {
      transform: rotate(-180deg);
    }

    & .houston-topbar-user__default {
      display: none;
    }

    & .houston-topbar-user__mobile {
      border-left: ${theme.border.width.xs} solid
        ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
      padding-left: ${theme.spacing.nano};
    }

    ${theme.breakpoints.up('md')} {
      & .houston-topbar-user__default {
        display: block;
      }

      & .houston-topbar-user__mobile {
        display: none;
      }
    }
  `
);
