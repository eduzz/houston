import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';
import Caption from '@eduzz/houston-ui/Typography/Caption';

import Popover from '../Popover';
import usePopover from '../Popover/usePopover';

type ITooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export interface ITooltipProps {
  title?: React.ReactNode;
  placement?: ITooltipPlacement;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const TooltipBody = ({ className }: IStyledProp) => {
  return (
    <div className={className}>
      <div id='arrow' data-popper-arrow></div>
      <Caption color='neutralColor.high.pure'>Eu sou o tooltip </Caption>
    </div>
  );
};

const StyledTooltipBody = React.memo(styled(TooltipBody, { label: 'houston-tooltip' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.xxs};
    border: ${theme.border.width.xs} solid;
    border-radius: ${theme.border.radius.xs};
    min-width: ${theme.spacing.xl};
    background-color: ${theme.neutralColor.low.pure};

    #arrow,
    #arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
      color: inherit;
    }

    #arrow {
      visibility: hidden;
    }

    #arrow::before {
      visibility: visible;
      content: '';
      transform: rotate(45deg);
    }

    &.--placement-top {
      > #arrow {
        bottom: -4px;
      }
    }

    &.--placement-bottom {
      > #arrow {
        top: -4px;
      }
    }

    &.--placement-left {
      > #arrow {
        right: -4px;
      }
    }

    &.--placement-right {
      > #arrow {
        left: -4px;
      }
    }
  `}
`);

const Tooltip = ({ children, placement }: ITooltipProps) => {
  const { openPopover, closePopover, popoverTargetProps, popoverProps } = usePopover();

  return (
    <>
      <Popover {...popoverProps} placement={placement}>
        <StyledTooltipBody className={`--placement-${placement}`} />
      </Popover>
      <div
        {...popoverTargetProps}
        tabIndex={0}
        onMouseEnter={openPopover}
        /* onMouseLeave={closePopover}*/
      >
        {children}
      </div>
    </>
  );
};

export default React.memo(Tooltip);
