import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import MenuIcon from '@eduzz/houston-icons/DragAndDrop';
import styled, { css, IStyledProp, breakpoints } from '@eduzz/houston-styles';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { TOOLBAR_HEIGHT } from '../context';
import Action from './Action';
import Apps from './Apps';
import ToolbarContext, { ToolbarContextType } from './context';
import User from './User';
import UserMenuDivider from './User/Menu/Divider';
import UserMenuItem from './User/Menu/Item';
import UserMenuContext from './User/Menu/ItemContext';

export interface ToolbarProps extends IStyledProp {
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

const Toolbar = React.memo<ToolbarProps>(({ children, currentApplication, logo, logoMobile, className, user }) => {
  const theme = useHoustonTheme();
  const registerToolbar = useContextSelector(LayoutContext, context => context.registerToolbar);

  const contentClicked = React.useRef({ clicked: false }).current;

  React.useEffect(() => {
    const unregister = registerToolbar();
    return () => unregister();
  }, [registerToolbar]);

  const handleDocumentClick = React.useCallback(() => {
    setTimeout(() => {
      if (contentClicked.clicked) {
        contentClicked.clicked = false;
      }
    }, 100);
  }, [contentClicked]);

  React.useEffect(() => {
    document.body.classList.add('houston-toolbar-applied');
    document.body.addEventListener('click', handleDocumentClick);

    let oldThemeColor: string = null;
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
      document.body.classList.remove('houston-toolbar-applied');
      document.body.removeEventListener('click', handleDocumentClick);
      metaThemeColor.content = oldThemeColor;
    };
  }, [handleDocumentClick, theme]);

  const handleClickContainer = React.useCallback(() => (contentClicked.clicked = true), [contentClicked]);

  const contextValue = React.useMemo<ToolbarContextType>(
    () => ({ currentApplication, user }),
    [currentApplication, user]
  );

  return (
    <ToolbarContext.Provider value={contextValue}>
      <div className={className}>
        <header className='houston-toolbar__header' onClick={handleClickContainer}>
          <div className='houston-toolbar__start'>
            <div
              className='houston-toolbar__icon-menu'
              // onClick={iconMenuProps.onClick}
            >
              <MenuIcon size={24} />
            </div>

            <Apps />

            <div className='houston-toolbar__logo'>
              <img
                className='houston-toolbar__logo-default'
                src={logo ?? '//eduzz-houston.s3.amazonaws.com/toolbar/logos/eduzz.svg'}
              />
              <img
                className='houston-toolbar__logo-mobile'
                src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/toolbar/logos/eduzz-mobile.svg'}
              />
            </div>

            {user?.isSupport && <span className='houston-toolbar__support'>SUPORTE</span>}
          </div>

          <div className='houston-toolbar__quick-access'>{children}</div>
        </header>
      </div>
    </ToolbarContext.Provider>
  );
});

const ToolbarStyled = styled(Toolbar, { label: 'houston-toolbar' })(
  ({ theme }) => css`
    height: ${TOOLBAR_HEIGHT}px;

    & > .houston-toolbar__header {
      font-family: ${theme.font.family.base};
      background-color: ${theme.brandColor.primary.pure};
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: ${TOOLBAR_HEIGHT}px;
      display: flex;
      justify-content: space-between;
      z-index: 105;
      transition: 0.15s ease-out;

      & > .houston-toolbar__start {
        display: flex;
        align-items: center;

        .houston-toolbar__icon-menu {
          margin-right: ${theme.spacing.xxxs};
          line-height: 0;
          cursor: pointer;
          display: none;

          ${breakpoints.down('lg')} {
            display: block;
          }
        }

        .houston-toolbar__logo {
          height: 70%;
          width: auto;

          ${breakpoints.down('sm')} {
            width: 44px;
            min-width: 40px;
          }

          & > img {
            max-width: 100%;
            max-height: 100%;
            height: ${TOOLBAR_HEIGHT}px;
          }

          & > .houston-toolbar__logo-mobile {
            display: none;
          }
        }

        .houston-toolbar__support {
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

      & > .houston-toolbar__quick-access {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `
);

export default nestedComponent(ToolbarStyled, {
  Action,
  User,
  UserMenuItem,
  UserMenuDivider,
  UserMenuContext
});
