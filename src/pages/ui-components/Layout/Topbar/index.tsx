import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import MenuLeft from '@eduzz/houston-icons/MenuLeft';
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
              className='houston-topbar__mobile-menu'
              icon={sidebarOpened ? <CancelIcon size={24} /> : <MenuLeft size={24} />}
              onClick={sidebarToogleOpened}
            />

            <Apps />

            <div className='houston-topbar__logo'>
              <img
                className='houston-topbar__logo-default'
                src={logo ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz-colored.svg'}
              />
              <img
                className='houston-topbar__logo-mobile'
                src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz-mobile.svg'}
              />
            </div>

            {user?.isSupport && (
              <div className='houston-topbar__flag'>
                <span>Unity</span>
                SUPORTE
              </div>
            )}
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
      background-color: white;
      color: ${theme.neutralColor.low.pure};
      border-bottom: ${theme.border.width.xs} solid
        ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
      box-sizing: border-box;
      position: fixed;
      padding: ${theme.spacing.inline.nano};
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

        & .houston-topbar__mobile-menu {
          cursor: pointer;
          margin: 0 -10px 0 -5px;

          ${breakpoints.up('md')} {
            display: none;
          }
        }

        & .houston-topbar__logo {
          height: 70%;
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

          ${breakpoints.down('md')} {
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

        .houston-topbar__flag {
          font-size: 12px;
          font-weight: 600;
          color: #fbcd02;
          position: relative;
          top: 2px;

          ${breakpoints.down('md')} {
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
