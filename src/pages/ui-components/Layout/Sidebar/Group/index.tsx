import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import ChevronDownIcon from '@eduzz/houston-icons/ChevronDown';
import styled, { cx, css, IStyledProp } from '@eduzz/houston-styles';

import Collapse from '../../../Collapse';
import Typography from '../../../Typography';
import SidebarGroupContext, { SidebarGroupContextType } from './context';

export interface SidebarGroupProps extends IStyledProp {
  label: React.ReactNode;
  children: React.ReactNode;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ className, children, label }) => {
  const [isExpanded, toogleExpanded, trueExpanded] = useBoolean(true);

  const contextValue = React.useMemo<SidebarGroupContextType>(() => {
    return { onItemActive: trueExpanded };
  }, [trueExpanded]);

  return (
    <SidebarGroupContext.Provider value={contextValue}>
      <li className={className}>
        <div className='houston-sidebar-group__item' onClick={toogleExpanded}>
          <div className={cx('houston-sidebar-group__arrow', isExpanded && '--rotate')}>
            <ChevronDownIcon size={16} />
          </div>

          <div className='houston-sidebar-group__content'>
            <Typography
              className='houston-sidebar-group__label'
              color='neutralColor.low.medium'
              weight='regular'
              size='xs'
              lineHeight='lg'
            >
              {label}
            </Typography>
          </div>
        </div>

        <ul>
          <Collapse timeout={350} visibled={isExpanded}>
            {children}
          </Collapse>
        </ul>
      </li>
    </SidebarGroupContext.Provider>
  );
};

export default styled(React.memo(SidebarGroup), { label: 'houston-sidebar-group' })(
  ({ theme }) => css`
    .houston-sidebar-group__item {
      padding: ${theme.spacing.squish.xxs};
      display: grid;
      grid-template-columns: 1.5rem 1fr;
      align-items: center;
      line-height: 1.15;
      cursor: pointer;
      transition: 0.15s linear;
      min-height: ${theme.pxToRem(48)}rem;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.12);
      }

      & .houston-sidebar-group__arrow {
        line-height: 0;
        margin-right: ${theme.spacing.inline.nano};
        transition: 0.15s linear;
        text-align: center;

        &.--rotate {
          transform: rotateX(180deg);
        }
      }

      & .houston-sidebar-group__content {
        min-width: 0;

        & .houston-sidebar-group__label {
          text-transform: uppercase;
          white-space: nowrap;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  `
);
