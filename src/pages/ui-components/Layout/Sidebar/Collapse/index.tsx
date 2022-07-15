import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import ChevronLeftIcon from '@eduzz/houston-icons/ChevronLeft';
import styled, { StyledProp, cx } from '@eduzz/houston-styles/styled';

import SidebarContext from '../context';

interface ISidebarCollapseProps extends StyledProp {}

const SidebarCollapse: React.FC<ISidebarCollapseProps> = ({ className }) => {
  const collapsed = useContextSelector(SidebarContext, context => context.collapsed);
  const inside = useContextSelector(SidebarContext, context => context.insideComponent);

  const onClickCollapse = useContextSelector(SidebarContext, context => context.handleCollapse);

  return (
    <div className={cx(className, { '--collapsed': collapsed, '--inside': inside })} onClick={onClickCollapse}>
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
  background: ${({ theme }) => theme.brandColor.primary.dark};
  position: absolute;
  right: -12px;
  top: 8px;
  border-radius: 50px;
  cursor: pointer;
  opacity: 0;
  transition: 0.15s linear;
  z-index: 2;

  &.--inside {
    opacity: 1;
  }

  &:hover {
    background: ${({ theme }) => theme.brandColor.primary.dark + 'b8'};
  }

  &:active {
    background: ${({ theme }) => theme.brandColor.primary.dark + 'a3'};
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
