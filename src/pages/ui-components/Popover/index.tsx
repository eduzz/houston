import * as React from 'react';

import PopoverContext from './context';

export interface IPopoverProps {
  targetRef: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
}

export interface IPopoverRef {
  open(): void;
}

const Popover = React.forwardRef<IPopoverRef, IPopoverProps>(({ targetRef, children }, ref) => {
  const setState = React.useContext(PopoverContext);

  React.useImperativeHandle(
    ref,
    () => ({
      open() {
        setState({
          opened: true,
          target: targetRef.current,
          content: children
        });
      }
    }),
    [children, setState, targetRef]
  );

  return null;
});

export default Popover;
