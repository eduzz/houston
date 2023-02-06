import * as React from 'react';

import { Typography } from 'antd';

import { useContextSelector } from 'use-context-selector';

import Action from './Action';
import Actions from './Actions';
import Apps from './Apps';
import Belt from './Belt';
import TopbarContext, { TopbarContextType } from './context';
import Logo from './Logo';
import Search from './Search';
import UnitySupportChat from './UnitySupportChat';
import User from './User';
import UserMenu from './UserMenu';
import UserMenuDivider from './UserMenu/Divider';
import UserMenuItem from './UserMenu/Item';
import UserMenuGroup from './UserMenu/ItemGroup';
import IconClose from '../../Icons/Close';
import IconMenu from '../../Icons/Menu';
import styled, { css, cx, StyledProp } from '../../styled';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext from '../context';

export interface TopbarProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disableApps?: boolean;
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
  logoWrapper?: React.JSXElementConstructor<{ children: React.ReactNode; className: string }>;
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
  ({
    children,
    currentApplication,
    logo,
    logoMobile,
    logoDarkMode,
    logoMobileDarkMode,
    logoWrapper,
    className,
    user,
    disableApps,
    ...rest
  }) => {
    const register = useContextSelector(LayoutContext, context => context.topbar.register);
    const sidebarToogleOpened = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
    const registerCenterPortal = useContextSelector(LayoutContext, context => context.topbar.registerCenterPortal);
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
    }, []);

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
                    <IconClose size={18} />
                  ) : (
                    <IconMenu size={22} className='hst-topbar-mobile-menu-icon' />
                  )
                }
                onClick={sidebarToogleOpened}
              />

              {!disableApps && <Apps />}

              <Logo
                logo={logo}
                logoMobile={logoMobile}
                logoDarkMode={logoDarkMode}
                logoMobileDarkMode={logoMobileDarkMode}
                wrapper={logoWrapper}
              />

              {!!user?.tag && (
                <Typography className={cx('hst-topbar-tag', `hst-topbar-tag-${user.tag}`)}>{user.tag}</Typography>
              )}
            </div>

            <div className='hts-topbar-center' ref={registerCenterPortal} />

            <div className='hst-topbar-quick-access'>
              <Belt />
              <Actions>{children}</Actions>
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
    height: ${theme.pxToRem(theme.components.topBarHeight)}rem;

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
      background-color: ${theme.antd.colorBgElevated};
      color: ${theme.antd.colorText};
      border-bottom: 3px solid ${theme.hexToRgba(theme.antd.colorBorder, 0.3)};
      box-sizing: border-box;
      position: fixed;
      padding: 0.5rem 1rem 0.5rem 1rem;
      top: 0;
      left: 0;
      right: 0;
      height: ${theme.pxToRem(theme.components.topBarHeight)}rem;
      display: flex;
      justify-content: space-between;
      z-index: 105;
      gap: 1rem;
      transition: 0.15s ease-out, background-color 0.3s, border-bottom-color 0.3s;

      ${theme.mediaQuery.down('xs')} {
        padding: 0.5rem 0.5rem 0.5rem 0.3rem;
      }

      & > .hst-topbar-start {
        display: flex;
        align-items: center;

        & .hst-topbar-mobile-menu {
          cursor: pointer;

          & .hst-topbar-mobile-menu-icon {
            margin-top: -2px;
          }

          ${theme.mediaQuery.up('xl')} {
            display: none;
          }
        }

        .hst-topbar-tag {
          text-transform: capitalize;
          padding: 4px 8px 4px 8px;
          letter-spacing: 0.5px;
          display: block;
          border-radius: 3px;
          font-size: 14px;
          text-transform: uppercase;
          margin-left: 0.5rem;
          line-height: 14px;

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

      & > .hts-topbar-center {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        max-width: 400px;
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
  UserMenuGroup,
  Search
});
