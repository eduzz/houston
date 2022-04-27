import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import ChevronDownIcon from '@eduzz/houston-icons/ChevronDown';
import { cx } from '@eduzz/houston-styles';
import styled, { IStyledProp } from '@eduzz/houston-styles/styled';

import Collapse from '../../../Collapse';
import MenuContext from '../Menu/context';
import SubMenuItemContext, { ISidebarSubMenuItemContext } from './context';

let refCounter = 0;

export interface ISidebarSubMenuItem extends IStyledProp {
  id?: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  startedExpanded?: boolean;
  children: React.ReactNode;
}

const SidebarSubMenuItem: React.FC<ISidebarSubMenuItem> = ({
  className,
  children,
  icon,
  label,
  startedExpanded,
  isActive: isActiveProp,
  ...rest
}) => {
  const [ref] = React.useState(() => `submenu-${++refCounter}`);
  const [items, setItems] = React.useState<{ active: boolean }[]>([]);

  const expanded = useContextSelector(MenuContext, context => context.expanded);

  const handleClickExpand = useContextSelector(MenuContext, context => context.handleClickExpand);

  const handleClickItem = React.useCallback(() => handleClickExpand(ref), [handleClickExpand, ref]);

  const contextValue = React.useMemo<ISidebarSubMenuItemContext>(() => {
    return {
      ref,
      registerItem: (active: boolean) => {
        const refItem = { active };

        if (active) {
          handleClickExpand(ref, true);
        }

        setItems(items => [...items, refItem]);
        return () => setItems(items => items.filter(i => i !== refItem));
      }
    };
  }, [ref, handleClickExpand]);

  React.useEffect(() => {
    startedExpanded && handleClickExpand(ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isExpanded = expanded === ref;
  const isActive = isActiveProp ?? items.some(i => i.active);

  return (
    <SubMenuItemContext.Provider value={contextValue}>
      <li {...rest} className={cx(className, isActive && '--active')}>
        <div className='item' onClick={handleClickItem}>
          <div className='content'>
            {icon && <div className='icon'>{icon}</div>}
            <div className='label'>{label}</div>
          </div>

          <div className={cx('arrow', isExpanded && '--rotate')}>
            <ChevronDownIcon size={16} />
          </div>
        </div>

        <ul>
          <Collapse timeout={350} visibled={isExpanded}>
            {children}
          </Collapse>
        </ul>
      </li>
    </SubMenuItemContext.Provider>
  );
};

export default styled(React.memo(SidebarSubMenuItem), { label: 'houston-sidebar-submenu-item' })`
  &.--active {
    .item {
      color: ${({ theme }) => theme.brandColor.primary.pure};
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
