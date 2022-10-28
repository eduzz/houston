import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import styled, { cx, css, StyledProp } from '@eduzz/houston-ui/styled';

import CollapseEffect from '../../../CollapseEffect';
import Typography from '../../../Typography';
import SidebarGroupContext, { SidebarGroupContextType } from './context';

export interface SidebarGroupProps extends StyledProp {
  label?: React.ReactNode;
  children: React.ReactNode;
  tabIndex?: number;
  id?: string;
}

const SidebarGroup = ({ id, className, children, label, tabIndex }: SidebarGroupProps) => {
  const [isExpanded, toogleExpanded, trueExpanded] = useBoolean(true);

  const contextValue = React.useMemo<SidebarGroupContextType>(() => {
    return { onItemActive: trueExpanded };
  }, [trueExpanded]);

  return (
    <SidebarGroupContext.Provider value={contextValue}>
      <li id={id} className={className}>
        {!!label && (
          <div
            className={cx('hst-sidebar-group-item', isExpanded && 'hst-sidebar-group-item-expanded')}
            onClick={toogleExpanded}
            tabIndex={tabIndex ?? 1}
          >
            <div className='hst-sidebar-group-indicator' />

            <div className='hst-sidebar-group-content'>
              <Typography
                className='hst-sidebar-group-label'
                color='neutralColor.low.medium'
                weight='regular'
                size='xxs'
                lineHeight='lg'
              >
                {label}
              </Typography>
            </div>
          </div>
        )}

        <ul className='hst-sidebar-group-items'>
          <CollapseEffect visibled={isExpanded}>
            <div className='hst-sidebar-group-items-content'>{children}</div>
          </CollapseEffect>
        </ul>
      </li>
    </SidebarGroupContext.Provider>
  );
};

export default styled(React.memo(SidebarGroup), { label: 'hst-sidebar-group' })(
  ({ theme }) => css`
    user-select: none;

    .hst-sidebar-group-item {
      padding: 0.5rem 1rem 0.5rem 1rem;
      display: grid;
      grid-template-columns: ${theme.pxToRem(26)}rem 1fr;
      grid-gap: 0.5rem;
      align-items: center;
      line-height: 1.15;
      cursor: pointer;
      transition: 0.15s linear;
      min-height: 2.2rem;
      outline: none;
      position: relative;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.12);
      }

      & .hst-sidebar-group-indicator {
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -1px;
        height: 2px;
        background-color: #c7c7c7;
        width: 30px;
        transition: 0.3s;
      }

      & .hst-sidebar-group-content {
        min-width: 0;
        grid-column: 2;

        & .hst-sidebar-group-label {
          text-transform: uppercase;
          white-space: nowrap;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          letter-spacing: 0.03em;
          color: #6f6f6f;
        }
      }

      &.hst-sidebar-group-item-expanded {
        & .hst-sidebar-group-indicator {
          top: calc(50% - 1px);
          height: 1px;
          margin-top: -0.5px;
          background-color: #dedede;
        }

        & .hst-sidebar-group-label {
          color: #8e8e8e;
        }
      }
    }

    & .hst-sidebar-group-items {
      margin: 0;
      padding: 0;

      .hst-sidebar-group-items-content {
        padding-bottom: 0.7rem;

        & li {
          margin-bottom: 0;
        }
      }
    }
  `
);
