import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import MenuLeft from '@eduzz/houston-icons/MenuLeft';
import styled, { css, StyledProp, breakpoints } from '@eduzz/houston-styles';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import Typography from '../../Typography';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { TOPBAR_HEIGHT, TOPBAR_HEIGHT_MOBILE } from '../context';
import Action from './Action';
import Apps from './Apps';
import Belt from './Belt';
import TopbarContext, { TopbarContextType } from './context';
import SupportChat from './SupportChat';
import User from './User';
import UserMenu from './UserMenu';
import UserMenuDivider from './UserMenu/Divider';
import UserMenuItem from './UserMenu/Item';
import UserMenuGroup from './UserMenu/ItemGroup';

export interface TopbarProps extends StyledProp {
  children: React.ReactNode;
  logo?: string;
  logoMobile?: string;
  currentApplication?: string;
  blackMode?: boolean;
  user?: {
    id?: number;
    name: string;
    email?: string;
    avatar?: string;
    belt?: string;
    tag?: 'lite' | 'pro' | 'unity' | 'partner';
    isSupport?: boolean;
    supportId?: number;
  };
}

const Topbar = React.memo<TopbarProps>(
  ({ children, currentApplication, logo, logoMobile, className, blackMode, user }) => {
    const theme = useHoustonTheme();
    const register = useContextSelector(LayoutContext, context => context.topbar.register);
    const sidebarToogleOpened = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
    const sidebarOpened = useContextSelector(LayoutContext, context => context.sidebar.opened);

    React.useEffect(() => {
      const unregister = register();
      return () => unregister();
    }, [register]);

    React.useEffect(() => {
      document.body.classList.add('houston-topbar-applied');

      return () => {
        document.body.classList.remove('houston-topbar-applied');
      };
    }, [theme]);

    const contextValue = React.useMemo<TopbarContextType>(
      () => ({ currentApplication, user }),
      [currentApplication, user]
    );

    return (
      <TopbarContext.Provider value={contextValue}>
        <div className={cx(className, { '--black-mode': blackMode })}>
          <header className='houston-topbar__header'>
            <div className='houston-topbar__start'>
              <Action
                className='houston-topbar__mobile-menu'
                icon={sidebarOpened ? <CancelIcon size={24} /> : <MenuLeft size={24} />}
                onClick={sidebarToogleOpened}
              />

              <Apps />

              <div className='houston-topbar__logo'>
                <img
                  className='houston-topbar__logo-default'
                  src={logo ?? `//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz${blackMode ? '' : '-colored'}.svg`}
                />
                <img
                  className='houston-topbar__logo-mobile'
                  src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz-mobile.svg'}
                />
              </div>

              {!!user?.tag && (
                <Typography
                  lineHeight='default'
                  color='inherit'
                  className={cx('houston-topbar__tag', `--${user.tag}`)}
                  size='xs'
                >
                  {user.tag}
                </Typography>
              )}
            </div>

            <div className='houston-topbar__quick-access'>
              <Belt />

              {children}
              <User />
            </div>
          </header>
        </div>
      </TopbarContext.Provider>
    );
  }
);

const TopbarStyled = styled(Topbar, { label: 'houston-topbar' })(
  ({ theme }) => css`
    height: ${TOPBAR_HEIGHT}px;

    & > .houston-topbar__header {
      font-family: ${theme.font.family.base};
      background-color: white;
      color: ${theme.neutralColor.low.pure};
      border-bottom: ${theme.border.width.xs} solid
        ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
      box-sizing: border-box;
      position: fixed;
      padding: ${theme.spacing.inset.xs};
      top: 0;
      left: 0;
      right: 0;
      height: ${TOPBAR_HEIGHT}px;
      display: flex;
      justify-content: space-between;
      z-index: 105;
      transition: 0.15s ease-out;

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xxs};
        height: ${TOPBAR_HEIGHT_MOBILE}px;
      }

      & > .houston-topbar__start {
        display: flex;
        align-items: center;

        & .houston-topbar__mobile-menu {
          cursor: pointer;
          margin: 0 -10px 0 -5px;

          ${breakpoints.up('lg')} {
            display: none;
          }
        }

        & .houston-topbar__logo {
          height: 80%;
          width: auto;
          margin-right: ${theme.spacing.inline.nano};

          ${theme.breakpoints.up('md')} {
            margin: 0 ${theme.spacing.inline.nano};
          }

          & > img {
            max-width: 100%;
            max-height: 100%;
            height: ${TOPBAR_HEIGHT}px;
          }

          & > .houston-topbar__logo-mobile {
            display: none;
          }

          ${breakpoints.down('sm')} {
            width: 44px;
            min-width: 40px;

            & .houston-topbar__logo-default {
              display: none;
            }

            & .houston-topbar__logo-mobile {
              display: block;
            }
          }
        }

        .houston-topbar__tag {
          text-transform: capitalize;
          padding: ${theme.spacing.quarck};
          margin-top: 5px;
          letter-spacing: 0.5px;
          display: none;
          border-radius: 3px;
          margin-left: ${theme.spacing.nano};

          ${theme.breakpoints.up('sm')} {
            display: block;
          }

          &.--pro {
            border: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
          }

          &.--unity {
            border: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
            background: ${theme.neutralColor.low.pure};
            color: white;
          }

          &.--partner {
            background: ${theme.neutralColor.high.medium};
          }
        }
      }

      & > .houston-topbar__quick-access {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &.--black-mode > .houston-topbar__header {
      background-color: #272727;
      color: white;
    }
  `
);

export default nestedComponent(TopbarStyled, {
  Action,
  SupportChat,
  UserMenu,
  UserMenuItem,
  UserMenuDivider,
  UserMenuGroup
});
