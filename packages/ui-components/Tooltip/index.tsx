import * as React from 'react';

import TooltipMUI, { TooltipProps } from '@material-ui/core/Tooltip';

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

type ITooltipExtends = 'open' | 'onOpen' | 'onClose';

export interface ITooltipProps extends Pick<TooltipProps, ITooltipExtends> {
  title: string;
  placement?: ITooltipPlacement;
}

const Tooltip = React.memo<ITooltipProps>(({ title, placement = 'top', children, ...props }) => (
  <TooltipMUI {...props} placement={placement} title={title} arrow>
    {children as React.ReactElement}
  </TooltipMUI>
));

export default Tooltip;
