import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import useOnClickOutside from '../../../hooks/useClickOutside';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import Typography from '../../../Typography';
import { TOOLBAR_HEIGHT } from '../../context';
import ToolbarContext from '../context';
import Avatar from './Avatar';
import Belt from './Belt';
import UserMenu from './Menu';

const User = React.memo<IStyledProp>(({ className, children }) => {
  const wrapperMenuUser = React.useRef<HTMLDivElement>(null);
  const user = useContextSelector(ToolbarContext, context => context.user);

  const [dropdown, setDropdown] = React.useState<HTMLDivElement>(null);

  const hasMenu = React.useMemo(() => !!React.Children.count(children), [children]);

  const handleClickOpenDropdown = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hasMenu) {
        return;
      }

      if (dropdown) {
        setDropdown(null);
        return;
      }

      setDropdown(e.currentTarget);
    },
    [dropdown, hasMenu]
  );

  const handleClearDropdown = React.useCallback(() => setDropdown(null), []);

  useOnClickOutside(wrapperMenuUser, () => hasMenu && setDropdown(null), [hasMenu]);
  useEscapeKey(() => hasMenu && setDropdown(null), [hasMenu]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Belt belt={user?.belt} />

      <div ref={wrapperMenuUser} className={cx(className, { '--active': !!dropdown, '--has-menu': hasMenu })}>
        <div className='houston-toolbar-user__label' onClick={handleClickOpenDropdown}>
          <Avatar name={user?.name} avatar={user?.avatar} />

          <Typography size='xxs' color='inherit' className='houston-toolbar-user__name'>
            {user?.name}
          </Typography>

          {hasMenu && (
            <div className={cx('houston-toolbar-user__menu-arrow', dropdown && '--open')}>
              <IconChevronDown size={18} />
            </div>
          )}
        </div>

        <UserMenu opened={!!dropdown} onClose={handleClearDropdown}>
          {children}
        </UserMenu>
      </div>
    </>
  );
});

export default styled(User, { label: 'houston-toolbar-user' })(
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

    .houston-toolbar-user__label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 ${theme.spacing.xxxs};
      height: ${TOOLBAR_HEIGHT}px;

      ${theme.breakpoints.down('sm')} {
        padding: 0 ${theme.spacing.nano};
      }

      .houston-toolbar-user__name {
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

      .houston-toolbar-user__menu-arrow {
        margin-left: ${theme.spacing.quarck};
        transition: 0.15s ease-out;

        ${theme.breakpoints.down('sm')} {
          display: none;
        }

        &.--open {
          transform: rotate(-180deg);
        }

        span.houston-icon {
          line-height: 0;
          position: relative;
          top: 2px;
        }
      }
    }
  `
);
