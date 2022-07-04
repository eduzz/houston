import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';
import Caption from '@eduzz/houston-ui/Typography/Caption';

export interface ITooltipBody extends IStyledProp {
  title: React.ReactNode;
}

const TooltipBody = ({ className, title }: ITooltipBody) => {
  return (
    <div role='tooltip' className={className}>
      <div id='arrow' data-popper-arrow></div>
      <Caption color='neutralColor.high.pure'>{title}</Caption>
    </div>
  );
};

export default React.memo(styled(TooltipBody, { label: 'houston-tooltip' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.xxs};
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

    &.--placement-top,
    &.--placement-top-start,
    &.--placement-top-end {
      > #arrow {
        bottom: -4px;
      }
    }

    &.--placement-bottom,
    &.--placement-bottom-start,
    &.--placement-bottom-end {
      > #arrow {
        top: -4px;
      }
    }

    &.--placement-left,
    &.--placement-left-start,
    &.--placement-left-end {
      > #arrow {
        right: -4px;
      }
    }

    &.--placement-right,
    &.--placement-right-start,
    &.--placement-right-end {
      > #arrow {
        left: -4px;
      }
    }
  `}
`);
