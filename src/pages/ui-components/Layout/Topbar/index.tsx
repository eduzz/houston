import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import styled, { css, StyledProp } from '@eduzz/houston-ui/styled';

import Typography from '../../Typography';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { TOPBAR_HEIGHT } from '../context';
import Action from './Action';
import Apps from './Apps';
import Belt from './Belt';
import TopbarContext, { TopbarContextType } from './context';
import UnitySupportChat from './UnitySupportChat';
import User from './User';
import UserMenu from './UserMenu';
import UserMenuDivider from './UserMenu/Divider';
import UserMenuItem from './UserMenu/Item';
import UserMenuGroup from './UserMenu/ItemGroup';

export interface TopbarProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disableApps?: boolean;
  logo?: string;
  logoMobile?: string;
  currentApplication?: string;
  user?: {
    id?: number;
    name: string;
    email?: string;
    avatar?: string;
    belt?: string;
    tag?: 'lite' | 'pro' | 'unity' | 'partner';
    isClubeBlack?: boolean;
    isSupport?: boolean;
    supportId?: number;
  };
}

const Topbar = React.memo<TopbarProps>(
  ({ children, currentApplication, logo, logoMobile, className, user, disableApps, ...rest }) => {
    const theme = useHoustonTheme();
    const register = useContextSelector(LayoutContext, context => context.topbar.register);
    const sidebarToogleOpened = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
    const sidebarOpened = useContextSelector(LayoutContext, context => context.sidebar.opened);

    React.useEffect(() => {
      const unregister = register();
      return () => unregister();
    }, [register]);

    React.useEffect(() => {
      document.body.classList.add('hst-topbar-applied');

      return () => {
        document.body.classList.remove('hst-topbar-applied');
      };
    }, [theme]);

    const contextValue = React.useMemo<TopbarContextType>(
      () => ({ currentApplication, user }),
      [currentApplication, user]
    );

    return (
      <TopbarContext.Provider value={contextValue}>
        <div className={className} {...rest}>
          <header className='hst-topbar-header'>
            {user?.isSupport && <div className='hst-topbar-user-support'>Suporte</div>}

            <div className='hst-topbar-start'>
              <Action
                className='hst-topbar-mobile-menu'
                icon={
                  sidebarOpened ? (
                    <CancelIcon size={24} />
                  ) : (
                    <svg width='23' height='23' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
                    </svg>
                  )
                }
                onClick={sidebarToogleOpened}
              />

              {!disableApps && <Apps />}

              <div className='hst-topbar-logo'>
                <img
                  className='hst-topbar-logo-default'
                  src={logo ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz.svg'}
                />
                <img
                  className='hst-topbar-logo-mobile'
                  src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/myeduzz-mobile.svg'}
                />
              </div>

              {!!user?.tag && (
                <Typography
                  lineHeight='default'
                  color='inherit'
                  className={cx('hst-topbar-tag', `hst-topbar-tag-${user.tag}`)}
                  size='xs'
                >
                  {user.tag}
                </Typography>
              )}
            </div>

            <div className='hst-topbar-quick-access'>
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

const TopbarStyled = styled(Topbar, { label: 'hst-topbar' })(
  ({ theme }) => css`
    height: ${theme.pxToRem(TOPBAR_HEIGHT)}rem;

    .hst-topbar-user-support {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #fbcd02;
      padding: 4px 8px;
      color: white;
      text-transform: uppercase;
      font-size: 11px;
      border-bottom-left-radius: 5px;
    }

    & > .hst-topbar-header {
      font-family: ${theme.font.family.base};
      background-color: white;
      color: #000;
      border-bottom: 3px solid #f4f4f4;
      box-sizing: border-box;
      position: fixed;
      padding: 0.5rem 1rem 0.5rem 1rem;
      top: 0;
      left: 0;
      right: 0;
      height: ${theme.pxToRem(TOPBAR_HEIGHT)}rem;
      display: flex;
      justify-content: space-between;
      z-index: 105;
      transition: 0.15s ease-out;

      & > .hst-topbar-start {
        display: flex;
        align-items: center;

        & .hst-topbar-mobile-menu {
          cursor: pointer;

          ${theme.mediaQuery.up('xl')} {
            display: none;
          }
        }

        & .hst-topbar-logo {
          height: 80%;
          width: auto;
          margin-inline: 0.5rem;

          & > img {
            max-width: 100%;
            max-height: 100%;
            height: ${TOPBAR_HEIGHT}px;
          }

          & > .hst-topbar-logo-mobile {
            display: none;
          }

          ${theme.mediaQuery.down('lg')} {
            width: ${theme.pxToRem(32)}rem;

            & .hst-topbar-logo-default {
              display: none;
            }

            & .hst-topbar-logo-mobile {
              display: block;
            }
          }
        }

        .hst-topbar-tag {
          text-transform: capitalize;
          padding: 4px 8px 4px 8px;
          letter-spacing: 0.5px;
          display: none;
          border-radius: 3px;
          font-size: 14px;
          text-transform: uppercase;
          margin-left: 0.5rem;

          ${theme.mediaQuery.up('sm')} {
            display: block;
          }

          &.hst-topbar-tag-pro {
            border: 1px solid #bababa;
          }

          &.hst-topbar-tag-unity {
            border: 1px solid #000;
            background: #000;
            color: white;
          }

          &.hst-topbar-tag-partner {
            background: #ededed;
          }
        }
      }

      & > .hst-topbar-quick-access {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `
);

export default nestedComponent(TopbarStyled, {
  Action,
  UnitySupportChat,
  UserMenu,
  UserMenuItem,
  UserMenuDivider,
  UserMenuGroup
});
