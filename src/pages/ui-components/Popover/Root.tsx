import * as React from 'react';

import { createPopper } from '@popperjs/core';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import useOnClickOutside from '../hooks/useClickOutside';
import PopoverContext, { IPopoverContext, IPopoverContextState } from './context';

export interface IPopoverProps extends IStyledProp {
  children?: React.ReactNode;
}

const PopoverRoot: React.FC<IPopoverProps> = ({ className, children }) => {
  const [state, setState] = React.useState<IPopoverContextState>({
    opened: false,
    content: null,
    target: null
  });

  const contentRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (!state.opened) return null;

    contentRef.current.style.width = `${state.target.offsetWidth}px`;
    const instance = createPopper(state.target, contentRef.current);
    return () => instance.destroy();
  }, [state]);

  const contextValue: IPopoverContext = React.useCallback(state => setState(state), []);

  useOnClickOutside(
    contentRef,
    () => {
      console.log('teste');
      if (!state.opened) return;
      setState(state => ({ ...state, opened: false }));
    },
    []
  );

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
      <div ref={contentRef} className={cx(className, { '--opened': state.opened })}>
        {state.content}
      </div>
    </PopoverContext.Provider>
  );
};

export default styled(PopoverRoot, { label: 'houston-popover' })(
  ({ theme }) => css`
    display: none;
    background-color: white;
    box-shadow: ${theme.shadow.level[1]};
    border-radius: ${theme.border.radius.xs};
    box-sizing: border-box;
    max-width: 100vw;
    z-index: 1000;

    &.--opened {
      display: block;
    }
  `
);
