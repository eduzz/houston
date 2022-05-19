import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp, css, cx } from '@eduzz/houston-styles';

import Collapse from '../Collapse';
import SidebarContext, { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED, TOOLBAR_HEIGHT } from '../context';

export interface ISidebarWrapperProps extends IStyledProp {
  id?: string;
  children: React.ReactNode;
}

const SidebarWrapper: React.FC<ISidebarWrapperProps> = ({ className, children, ...rest }) => {
  const visible = useContextSelector(SidebarContext, context => context.mobileVisible);
  const onRequestClose = useContextSelector(SidebarContext, context => context.onRequestClose);

  const hasToolbar = useContextSelector(SidebarContext, context => context.hasToolbar);
  const collapsible = useContextSelector(SidebarContext, context => context.collapsible);
  const collapsed = useContextSelector(SidebarContext, context => context.collapsed);

  const setInsideComponentTrue = useContextSelector(SidebarContext, context => context.setInsideComponentTrue);
  const setInsideComponentFalse = useContextSelector(SidebarContext, context => context.setInsideComponentFalse);

  return (
    <div
      className={cx(className, {
        '--visible': visible,
        '--has-toolbar': hasToolbar,
        '--collapsed': collapsed
      })}
    >
      <aside
        {...rest}
        onMouseOver={setInsideComponentTrue}
        onMouseLeave={setInsideComponentFalse}
        className='__sidebar'
      >
        {collapsible && <Collapse />}
        {children}
      </aside>

      <div
        onClick={onRequestClose}
        className={cx('__overlay', { '--visible': visible, '--has-toolbar': hasToolbar })}
      />
    </div>
  );
};

export default styled(SidebarWrapper, { label: 'houston-sidebar-wrapper' })`
  ${({ theme }) => {
    const SIDEBAR_WIDTH_IN_REM = `${theme.pxToRem(SIDEBAR_WIDTH)}rem`;
    const SIDEBAR_WIDTH_COLLAPSED_IN_REM = `${theme.pxToRem(SIDEBAR_WIDTH_COLLAPSED)}rem`;

    return css`
      width: ${SIDEBAR_WIDTH_IN_REM};
      transition: 0.2s linear;
      height: auto;

      & > .__sidebar {
        background: #fff;
        display: inline-flex;
        flex-direction: column;
        width: ${SIDEBAR_WIDTH_IN_REM};
        border-right: 1px solid #e0e0e0;
        transition: 0.2s linear, top 0s;
        z-index: 104;
        flex-grow: 1;
        position: fixed;
        bottom: 0;
        left: 0;
        top: 0;
        animation-delay: 0.3s;

        &:hover .__houston-sidebar-collapse {
          opacity: 1;
        }

        a {
          text-decoration: none;
        }
      }

      & > .__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: -1;
        transition: 0.1s linear, top 0s;
        opacity: 0;
        visibility: hidden;
        user-select: none;
      }

      &.--has-toolbar {
        & > .__sidebar,
        & > .__overlay {
          top: ${theme.pxToRem(TOOLBAR_HEIGHT)}rem;
        }
      }

      &.--collapsed {
        width: ${SIDEBAR_WIDTH_COLLAPSED_IN_REM};

        & > .__sidebar {
          width: ${SIDEBAR_WIDTH_COLLAPSED_IN_REM};

          ${theme.breakpoints.down('md')} {
            width: ${SIDEBAR_WIDTH_IN_REM};
          }

          &:hover {
            width: ${SIDEBAR_WIDTH_IN_REM};
          }
        }
      }

      // i'm not using breakpoint do be equal to the app toolbar menu icon
      @media screen and (max-width: 900px) {
        width: 0;

        &.--collapsed {
          width: 0;
        }

        & > .__sidebar {
          left: -${SIDEBAR_WIDTH_IN_REM};
          border: 0;
          opacity: 0;
        }

        &.--visible {
          & > .__sidebar {
            left: 0;
            opacity: 1;
          }

          & > .__overlay {
            opacity: 1;
            visibility: visible;
            user-select: auto;
            z-index: 102;
          }
        }
      }
    `;
  }}
`;
