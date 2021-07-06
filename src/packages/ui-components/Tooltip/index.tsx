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

type ITooltipExtends = 'open' | 'onOpen' | 'onClose' | 'interactive' | 'id';

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
      {children as React.ReactElement}
    </TooltipMUI>
  );
};

export default withHoustonTheme(Tooltip);
