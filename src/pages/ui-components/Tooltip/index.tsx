import * as React from 'react';

import { flushSync } from 'react-dom';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import { StyledProp } from '@eduzz/houston-styles/styled';

import Popover from '../Popover';
import usePopover from '../Popover/usePopover';
import TooltipBody from './TooltipBody';

export type TooltipPlacement =
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

export interface TooltipProps extends StyledProp {
  title: NonNullable<React.ReactNode>;
  placement?: TooltipPlacement;
  disabled?: boolean;
  children: React.ReactNode;
  id?: string;
  onClose?: () => void;
  onOpen?: () => void;
}

const Tooltip = ({ children, title, placement = 'top', id: idProp, disabled, onOpen, onClose }: TooltipProps) => {
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

  const props = {
    tabIndex: 0,
    onMouseEnter: onOpenPopover,
    onMouseLeave: onClosePopover,
    ref: popoverTargetProps.ref
  };

  return (
    <>
      {typeof children === 'string' ? (
        <span {...props}>{children}</span>
      ) : (
        React.cloneElement(children as React.ReactElement, props)
      )}

      {!disabled && isPopoverCreated && (
        <Popover id={id} {...popoverProps} placement={placement} variant='tooltip'>
          <TooltipBody title={title} />
        </Popover>
      )}
    </>
  );
};

export default React.memo(Tooltip);
