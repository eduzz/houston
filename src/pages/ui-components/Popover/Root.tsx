import * as React from 'react';

import { createPopper } from '@popperjs/core';

import useOnClickOutside from '../hooks/useClickOutside';
import PopoverContext, { IPopoverContext, IPopoverContextState } from './context';

export interface IPopoverProps {
  children?: React.ReactNode;
}

interface IState extends IPopoverContextState {
  closedTarget: IPopoverContextState['target'];
}

const PopoverRoot: React.FC<IPopoverProps> = ({ children }) => {
  const [state, setState] = React.useState<IState>({
    opened: false,
    target: null,
    content: null,
    closedTarget: null
  });

  React.useEffect(() => {
    if (!state.opened) {
      state.content?.classList?.remove('--opened');
      return null;
    }

    state.content.style.width = `${state.target.offsetWidth}px`;
    const instance = createPopper(state.target, state.content);
    state.content?.classList?.add('--opened');

    return () => {
      state.content?.classList?.remove('--opened');
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

    return () => {
      setState(currentState => {
        if (currentState.target !== newState.target) return currentState;
        return { ...currentState, opened: false };
      });
    };
  }, []);

  useOnClickOutside(
    state.content,
    () => {
      if (!state.opened) return;
      setState(currentState => ({ ...currentState, opened: false, closedTarget: currentState.target }));
      setTimeout(() => {
        setState(currentState => ({ ...currentState, closedTarget: null }));
      }, 300);
    },
    [state.opened]
  );

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

export default PopoverRoot;
