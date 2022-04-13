import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '../../styles/styled';
import Collapse from '../Collapse';
import SidebarContext, { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED, TOOLBAR_HEIGHT } from '../context';

export interface ISidebarContentProps extends IStyledProp {
  id?: string;
  children:React.ReactNode;
}

const SidebarContent: React.FC<ISidebarContentProps> = ({ className, children, ...rest }) => {
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

export default styled(SidebarContent, { label: 'houston-sidebar-content' })`
  width: ${SIDEBAR_WIDTH}px;
  transition: 0.2s linear;

  & > .__sidebar {
    background: #fff;
    display: inline-flex;
    flex-direction: column;
    width: ${SIDEBAR_WIDTH}px;
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
      top: ${TOOLBAR_HEIGHT}px;
    }
  }

  &.--collapsed {
    width: ${SIDEBAR_WIDTH_COLLAPSED}px;

    & > .__sidebar {
      width: ${SIDEBAR_WIDTH_COLLAPSED}px;

      ${({ theme }) => theme.breakpoints.down('md')} {
        width: ${SIDEBAR_WIDTH}px;
      }

      &:hover {
        width: ${SIDEBAR_WIDTH}px;
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
      left: -${SIDEBAR_WIDTH}px;
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
