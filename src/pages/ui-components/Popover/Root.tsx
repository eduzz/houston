import * as React from 'react';

import { createPopper } from '@popperjs/core';

import styled, { css, cx, IStyledProp, keyframes } from '@eduzz/houston-styles';

import useOnClickOutside from '../hooks/useClickOutside';
import PopoverContext, { IPopoverContext, IPopoverContextState } from './context';

export interface IPopoverProps extends IStyledProp {
  children?: React.ReactNode;
}

interface IState extends IPopoverContextState {
  closedTarget: IPopoverContextState['target'];
}

const PopoverRoot: React.FC<IPopoverProps> = ({ className, children }) => {
  const [state, setState] = React.useState<IState>({
    opened: false,
    content: null,
    target: null,
    closedTarget: null
  });

  const contentRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (!state.opened) return null;

    contentRef.current.style.width = `${state.target.offsetWidth}px`;
    const instance = createPopper(state.target, contentRef.current);
    return () => {
      setTimeout(() => instance.destroy(), 100);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.opened]);

  const contextValue: IPopoverContext = React.useCallback(newState => {
    const resolveNewState = (currentState: IState) => ({
      ...currentState,
      ...newState,
      opened: currentState.closedTarget === newState.target ? false : true
    });

    setState(currentState => {
      const waitPreviousclose = !!currentState.closedTarget;
      if (waitPreviousclose) {
        setTimeout(() => setState(resolveNewState), 100);
        return currentState;
      }

      return resolveNewState(currentState);
    });
  }, []);

  useOnClickOutside(
    contentRef,
    () => {
      if (!state.opened) return;
      setState(currentState => ({ ...currentState, opened: false, closedTarget: currentState.target }));
      setTimeout(() => {
        setState(currentState => ({ ...currentState, closedTarget: null }));
      }, 300);
    },
    [state.opened]
  );

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
      <div ref={contentRef} className={cx(className, { '--opened': state.opened })}>
        <div className='__container'>{state.content}</div>
      </div>
    </PopoverContext.Provider>
  );
};

const showAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const hideAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0; }
`;
export default styled(PopoverRoot, { label: 'houston-popover' })(
  ({ theme }) => css`
    box-sizing: border-box;
    max-width: 100vw;
    z-index: 1000;
    pointer-events: none;

    & > .__container {
      width: 100%;
      background-color: white;
      box-shadow: ${theme.shadow.level[1]};
      border-radius: ${theme.border.radius.xs};
      box-sizing: border-box;
      transform-origin: top center;
      animation-duration: 0.2s;
      animation-name: ${hideAnimation};
      animation-fill-mode: forwards;
    }

    &.--opened {
      pointer-events: auto;

      & > .__container {
        animation-name: ${showAnimation};
      }
    }
  `
);
