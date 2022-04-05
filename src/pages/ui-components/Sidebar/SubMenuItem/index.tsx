import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import ChevronDownIcon from '@eduzz/houston-icons/ChevronDown';

import Collpase from '../../Collapse';
import styled, { IStyledProp } from '../../styles/styled';
import MenuContext from '../Menu/context';
import SubMenuItemContext from './context';

export interface ISidebarSubMenuItem extends IStyledProp {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarSubMenuItem: React.FC<ISidebarSubMenuItem> = ({
  className,
  children,
  icon,
  label,
  id,
  isActive,
  ...rest
}) => {
  const expanded = useContextSelector(MenuContext, context => context.expanded);
  const handleClickExpand = useContextSelector(MenuContext, context => context.handleClickExpand);

  const visibled = React.useMemo(() => expanded === id, [expanded, id]);

  const handleClickItem = React.useCallback(() => handleClickExpand(id), [handleClickExpand, id]);

  return (
    <SubMenuItemContext.Provider value={{ id }}>
      <li {...rest} id={id} tabIndex={1} className={clsx(className, isActive && '--active')}>
        <div className='item' onClick={handleClickItem}>
          <div className='content'>
            {icon && <div className='icon'>{icon}</div>}
            <div className='label'>{label}</div>
          </div>

          <div className={clsx('arrow', visibled && '--rotate')}>
            <ChevronDownIcon size={16} />
          </div>
        </div>

        <ul>
          <Collpase timeout={350} visibled={visibled}>
            {children}
          </Collpase>
        </ul>
      </li>
    </SubMenuItemContext.Provider>
  );
};

export default styled(React.memo(SidebarSubMenuItem), { label: 'houston-sidebar-submenu-item' })`
  &.--active {
    .item {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .item {
    padding: 16px;
    display: flex;
    align-items: center;
    line-height: 1.15;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.15s linear;
    color: #666666;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;

      .icon {
        line-height: 0;
        margin-right: 16px;
        font-size: 16px;

        svg,
        img {
          font-size: 24px;
          width: 24px;
        }
      }

      .label {
        font-size: 14px;
        padding-right: 16px;
        font-weight: 500;
        transition: 0.1s linear;

        &::selection {
          background: transparent;
        }
      }
    }

    .arrow {
      line-height: 0;
      padding-left: 16px;
      transition: 0.15s linear;

      &.--rotate {
        transform: rotateX(180deg);
      }
    }
  }
`;
