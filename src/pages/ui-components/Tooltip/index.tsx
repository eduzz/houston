/* eslint-disable react/no-children-prop */
import * as React from 'react';

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

const Tooltip = ({ children }: ITooltipProps) => {
  const { openPopover, closePopover, popoverTargetProps, popoverProps } = usePopover();

  return (
    <>
      <Popover {...popoverProps} placement='bottom-start'>
        <div>Eu sou o tooltip</div>
      </Popover>
      <span {...popoverTargetProps} onMouseEnter={openPopover} onMouseLeave={closePopover}>
        {children}
      </span>
    </>
  );
};

export default React.memo(Tooltip);
