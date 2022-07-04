import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';

import Popover from '../Popover';
import usePopover from '../Popover/usePopover';
import TooltipBody from './TooltipBody';

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

export interface ITooltipProps extends IStyledProp {
  title?: React.ReactNode;
  placement?: ITooltipPlacement;
  disabled?: boolean;
  children: React.ReactNode;
  id?: string;
  onOpen?(): void;
  onClose?(): void;
}

const Tooltip = ({ children, placement = 'top', id: idProp, disabled, onOpen, onClose }: ITooltipProps) => {
  const { openPopover, closePopover, popoverTargetProps, popoverProps } = usePopover();

  const [id] = React.useState(idProp ?? `${Math.floor(Math.random() * 100)}`);

  const onOpenPopover = React.useCallback(() => {
    onOpen && onOpen();
    openPopover();
  }, [onOpen, openPopover]);

  const onClosePopover = React.useCallback(() => {
    onClose && onClose();
    closePopover();
  }, [onClose, closePopover]);

  return (
    <>
      <>
        {!disabled && (
          <Popover {...popoverProps} placement={placement}>
            <TooltipBody className={`--placement-${placement}`} />
          </Popover>
        )}
        <span id={id} tabIndex={0} {...popoverTargetProps} onMouseEnter={onOpenPopover} onMouseLeave={onClosePopover}>
          {children}
        </span>
      </>
    </>
  );
};

export default React.memo(Tooltip);
