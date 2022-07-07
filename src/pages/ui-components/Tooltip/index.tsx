/* eslint-disable react/no-children-prop */
import * as React from 'react';

import TooltipMUI, { TooltipProps } from '@mui/material/Tooltip';

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

type ITooltipExtends = 'open' | 'onOpen' | 'onClose' | 'id';

export interface ITooltipProps extends Pick<TooltipProps, ITooltipExtends> {
  title: NonNullable<React.ReactNode>;
  placement?: ITooltipPlacement;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ placement = 'top', children, disabled = false, className, ...rest }) => {
  return (
    <TooltipMUI
      {...rest}
      disableTouchListener={disabled}
      disableHoverListener={disabled}
      disableFocusListener={disabled}
      placement={placement}
      arrow
    >
      <Content children={children} className={className} />
    </TooltipMUI>
  );
};

const Content = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={className} {...rest} ref={ref} style={{ display: 'inline-flex' }}>
        {children}
      </div>
    );
  }
);

export default React.memo(Tooltip);
