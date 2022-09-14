import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import ChevronDownIcon from '@eduzz/houston-icons/ChevronDown';
import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';

import Collapse from '../../../Collapse';
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
          <div className='hst-sidebar-group-item' onClick={toogleExpanded} tabIndex={tabIndex ?? 1}>
            <div className={cx('hst-sidebar-group-arrow', isExpanded && 'hst-sidebar-group-rotate')}>
              <ChevronDownIcon size='md' />
            </div>

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
          <Collapse timeout={350} visibled={isExpanded}>
            {children}
          </Collapse>
        </ul>
      </li>
    </SidebarGroupContext.Provider>
  );
};

export default styled(React.memo(SidebarGroup), { label: 'hst-sidebar-group' })(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.stack.xxxs};

    .hst-sidebar-group-item {
      padding: ${theme.spacing.squish.xxs};
      display: grid;
      grid-template-columns: ${theme.pxToRem(26)}rem 1fr;
      grid-gap: ${theme.spacing.inline.nano};
      align-items: center;
      line-height: 1.15;
      cursor: pointer;
      transition: 0.15s linear;
      min-height: ${theme.pxToRem(48)}rem;
      outline: none;

      &:hover {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }

      &:focus {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        box-shadow: 0 0 0 ${theme.border.width.sm} ${theme.feedbackColor.informative.pure} inset;
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.12);
      }

      & .hst-sidebar-group-arrow {
        line-height: 0;

        transition: 0.15s linear;
        text-align: center;

        &.hst-sidebar-group-rotate {
          transform: rotateX(180deg);
        }
      }

      & .hst-sidebar-group-content {
        min-width: 0;

        & .hst-sidebar-group-label {
          text-transform: uppercase;
          white-space: nowrap;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    & .hst-sidebar-group-items {
      margin: 0;
      padding: 0;

      & li {
        margin-bottom: 0;
      }
    }
  `
);
