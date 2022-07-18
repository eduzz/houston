import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { PopoverRef } from '.';
import PopoverContext from './context';

export default function usePopover() {
  const openedTarget = useContextSelector(PopoverContext, context => context.openedTarget);

  const popoverRef = React.useRef<PopoverRef>(null);
  const targetRef = React.useRef<any>(null);
  const contentRef = React.useRef<any>(null);

  const openPopover = React.useCallback(() => popoverRef.current?.open(), []);
  const closePopover = React.useCallback(() => popoverRef.current?.close(), []);

  return {
    openPopover,
    closePopover,
    isPopoverOpened: targetRef.current && openedTarget === targetRef.current,
    popoverProps: { ref: popoverRef, targetRef, contentRef },
    popoverTargetProps: { ref: targetRef }
  };
}
