import * as React from 'react';

import { IPopoverRef } from '.';

export default function usePopover() {
  const popoverRef = React.useRef<IPopoverRef>();
  const targetRef = React.useRef<any>();
  const contentRef = React.useRef<any>();

  const openPopover = React.useCallback(() => popoverRef.current?.open(), []);
  const closePopover = React.useCallback(() => popoverRef.current?.close(), []);

  return {
    openPopover,
    closePopover,
    popoverProps: { ref: popoverRef, targetRef, contentRef },
    popoverTargetProps: { ref: targetRef }
  };
}
