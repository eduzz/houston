import * as React from 'react';

import clsx from 'clsx';

import styled, { IStyledProp } from '../../styles/styled';
import { ISidebarProps } from '../Sidebar';

interface ISidebarOverlay extends IStyledProp {
  visible: ISidebarProps['visible'];
  onClick?: ISidebarProps['onClickOverlay'];
}

const SidebarOverlay: React.FC<ISidebarOverlay> = ({ className, visible, ...rest }) => {
  return <div className={clsx(className, visible && '--visible')} {...rest} />;
};

export default styled(React.memo(SidebarOverlay), { label: 'houston-sidebar-overlay' })`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  transition: 0.1s linear;
  opacity: 0;
  visibility: hidden;
  user-select: none;

  &.--visible {
    ${({ theme }) => theme.breakpoints.down('md')} {
      opacity: 1;
      visibility: visible;
      user-select: auto;
      z-index: 102;
    }
  }
`;
