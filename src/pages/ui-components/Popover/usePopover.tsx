import * as React from 'react';

import { IPopoverRef } from '.';

export default function usePopover() {
  const popoverRef = React.useRef<IPopoverRef>();
  const targetRef = React.useRef<any>();

  const openPopover = React.useCallback(() => popoverRef.current?.open(), []);

  return {
    openPopover,
    popoverTargetProps: { ref: targetRef },
    popoverProps: { ref: popoverRef, targetRef }
  };
}
