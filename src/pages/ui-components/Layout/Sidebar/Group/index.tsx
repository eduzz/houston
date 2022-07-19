import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import ChevronDownIcon from '@eduzz/houston-icons/ChevronDown';
import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';

import Collapse from '../../../Collapse';
import Typography from '../../../Typography';
import SidebarGroupContext, { SidebarGroupContextType } from './context';

export interface SidebarGroupProps extends StyledProp {
  label: React.ReactNode;
  children: React.ReactNode;
  tabIndex?: number;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ className, children, label, tabIndex }) => {
  const [isExpanded, toogleExpanded, trueExpanded] = useBoolean(true);

  const contextValue = React.useMemo<SidebarGroupContextType>(() => {
    return { onItemActive: trueExpanded };
  }, [trueExpanded]);

  return (
    <SidebarGroupContext.Provider value={contextValue}>
      <li className={className}>
        <div className='houston-sidebar-group__item' onClick={toogleExpanded} tabIndex={tabIndex ?? 1}>
          <div className={cx('houston-sidebar-group__arrow', isExpanded && '--rotate')}>
            <ChevronDownIcon size='md' />
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

        <ul className='houston-sidebar-group__items'>
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

      & .houston-sidebar-group__arrow {
        line-height: 0;

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

    & .houston-sidebar-group__items {
      margin: 0;
      padding: 0;
      margin-bottom: ${theme.spacing.stack.xxxs};
    }
  `
);
