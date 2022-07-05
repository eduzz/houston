import * as React from 'react';

import { flushSync } from 'react-dom';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
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
  title: React.ReactNode;
  placement?: ITooltipPlacement;
  disabled?: boolean;
  children: React.ReactNode;
  id?: string;
  onClose?: () => void;
  onOpen?: () => void;
}

const Tooltip = ({ children, title, placement = 'top', id: idProp, disabled, onOpen, onClose }: ITooltipProps) => {
  const { openPopover, closePopover, popoverTargetProps, popoverProps } = usePopover();
  const [isPopoverCreated, , createPopover, deletePopover] = useBoolean();

  const [id] = React.useState(idProp ?? `${Math.floor(Math.random() * 1000)}`);

  const onOpenPopover = React.useCallback(() => {
    flushSync(() => {
      createPopover();
    });
    openPopover();
    onOpen && onOpen();
  }, [onOpen, openPopover, createPopover]);

  const onClosePopover = React.useCallback(() => {
    onClose && onClose();
    closePopover();
    deletePopover();
  }, [onClose, closePopover, deletePopover]);

  return (
    <>
      <>
        {!disabled && isPopoverCreated && (
          <Popover id={id} {...popoverProps} placement={placement} variant='tooltip'>
            <TooltipBody className={`--placement-${placement}`} title={title} />
          </Popover>
        )}
        <span tabIndex={0} {...popoverTargetProps} onMouseEnter={onOpenPopover} onMouseLeave={onClosePopover}>
          {children}
        </span>
      </>
    </>
  );
};

export default React.memo(Tooltip);
