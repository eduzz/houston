/* eslint-disable react/no-children-prop */
import * as React from 'react';

import TooltipMUI, { TooltipProps } from '@material-ui/core/Tooltip';

import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';

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
  title: string;
  placement?: ITooltipPlacement;
  disabled?: boolean;
  children: React.ReactNode;
}

const Tooltip: React.FC<ITooltipProps> = ({ placement = 'top', children, disabled = false, ...rest }) => {
  return (
    <TooltipMUI
      {...rest}
      disableTouchListener={disabled}
      disableHoverListener={disabled}
      disableFocusListener={disabled}
      placement={placement}
      arrow
    >
      <Content children={children} />
    </TooltipMUI>
  );
};

const Content = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children, ...rest }, ref) => {
  return (
    <div {...rest} ref={ref} style={{ display: 'inline-flex' }}>
      {children}
    </div>
  );
});

export default withHoustonTheme(React.memo(Tooltip));
