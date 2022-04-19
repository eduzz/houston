import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import ChevronLeftIcon from '@eduzz/houston-icons/ChevronLeft';

import styled, { IStyledProp } from '../../styles/styled';
import SidebarContext from '../context';

interface ISidebarCollapseProps extends IStyledProp {}

const SidebarCollapse: React.FC<ISidebarCollapseProps> = ({ className }) => {
  const collapsed = useContextSelector(SidebarContext, context => context.collapsed);
  const onClickCollapse = useContextSelector(SidebarContext, context => context.handleCollapse);

  return (
    <div className={cx(className, '__houston-sidebar-collapse', collapsed && '--collapsed')} onClick={onClickCollapse}>
      <div className='icon'>
        <ChevronLeftIcon size={14} />
      </div>
    </div>
  );
};

export default styled(React.memo(SidebarCollapse), { label: 'houston-sidebar-collapse' })`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary.dark};
  position: absolute;
  right: -12px;
  top: 8px;
  border-radius: 50px;
  cursor: pointer;
  opacity: 0;
  transition: 0.15s linear;

  &:hover {
    background: rgba(${({ theme }) => theme.hexToRgb(theme.colors.primary.dark)}, 0.72);
  }

  &:active {
    background: rgba(${({ theme }) => theme.hexToRgb(theme.colors.primary.dark)}, 0.64);
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }

  .icon {
    display: block;
    line-height: 0;
    transform: rotate(0);
    transition: 0.15s linear;
  }

  &.--collapsed {
    .icon {
      transform: rotate(180deg);
    }
  }
`;
