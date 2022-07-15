import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import MenuIcon from '@eduzz/houston-icons/DragAndDrop';
import styled, { css, IStyledProp, breakpoints } from '@eduzz/houston-styles';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { TOPBAR_HEIGHT } from '../context';
import Action from './Action';
import Apps from './Apps';
import TopbarContext, { TopbarContextType } from './context';
import User from './User';
import UserMenu from './UserMenu';
import UserMenuDivider from './UserMenu/Divider';
import UserMenuItem from './UserMenu/Item';
import UserMenuContext from './UserMenu/ItemContext';

export interface TopbarProps extends IStyledProp {
  children: React.ReactNode;
  logo?: string;
  logoMobile?: string;
  currentApplication?: string;
  user?: {
    id?: number;
    name: string;
    email?: string;
    avatar?: string;
    belt?: string;
    isSupport?: boolean;
    supportId?: number;
  };
}

const Topbar = React.memo<TopbarProps>(({ children, currentApplication, logo, logoMobile, className, user }) => {
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

    let oldThemeColor: string | null = null;
    let metaThemeColor = document.querySelector<HTMLMetaElement>('meta[name=theme-color]');

    if (metaThemeColor) {
      oldThemeColor = metaThemeColor.content;
      metaThemeColor.content = theme.brandColor.primary.pure;
    } else {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      metaThemeColor.content = theme.brandColor.primary.pure;
      document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
    }

    return () => {
      document.body.classList.remove('houston-topbar-applied');
      if (metaThemeColor && oldThemeColor) metaThemeColor.content = oldThemeColor;
    };
  }, [theme]);

  const contextValue = React.useMemo<TopbarContextType>(
    () => ({ currentApplication, user }),
    [currentApplication, user]
  );

  return (
    <TopbarContext.Provider value={contextValue}>
      <div className={className}>
        <header className='houston-topbar__header'>
          <div className='houston-topbar__start'>
            <Action
              icon={sidebarOpened ? <CancelIcon size={24} /> : <MenuIcon size={24} />}
              onClick={sidebarToogleOpened}
            />

            <Apps />

            <div className='houston-topbar__logo'>
              <img
                className='houston-topbar__logo-default'
                src={logo ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz.svg'}
              />
              <img
                className='houston-topbar__logo-mobile'
                src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz-mobile.svg'}
              />
            </div>

            {user?.isSupport && <span className='houston-topbar__support'>SUPORTE</span>}
          </div>

          <div className='houston-topbar__quick-access'>
            {children}
            <User />
          </div>
        </header>
      </div>
    </TopbarContext.Provider>
  );
});

const TopbarStyled = styled(Topbar, { label: 'houston-topbar' })(
  ({ theme }) => css`
    height: ${TOPBAR_HEIGHT}px;

    & > .houston-topbar__header {
      font-family: ${theme.font.family.base};
      background-color: ${theme.brandColor.primary.pure};
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: ${TOPBAR_HEIGHT}px;
      display: flex;
      justify-content: space-between;
      z-index: 105;
      transition: 0.15s ease-out;

      & > .houston-topbar__start {
        display: flex;
        align-items: center;

        .houston-topbar__icon-menu {
          margin-right: ${theme.spacing.xxxs};
          line-height: 0;
          cursor: pointer;
          display: none;

          ${breakpoints.down('lg')} {
            display: block;
          }
        }

        .houston-topbar__logo {
          height: 70%;
          width: auto;

          ${breakpoints.down('sm')} {
            width: 44px;
            min-width: 40px;
          }

          & > img {
            max-width: 100%;
            max-height: 100%;
            height: ${TOPBAR_HEIGHT}px;
          }

          & > .houston-topbar__logo-mobile {
            display: none;
          }
        }

        .houston-topbar__support {
          font-size: 12px;
          font-weight: 600;
          color: #fbcd02;
          position: relative;
          top: 2px;
          margin-left: 16px;

          ${breakpoints.down('sm')} {
            display: none;
          }
        }
      }

      & > .houston-topbar__quick-access {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `
);

export default nestedComponent(TopbarStyled, {
  Action,
  UserMenu,
  UserMenuItem,
  UserMenuDivider,
  UserMenuContext
});
