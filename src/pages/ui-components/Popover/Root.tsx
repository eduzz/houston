import * as React from 'react';

import { createPopper } from '@popperjs/core';

import useOnClickOutside from '../hooks/useClickOutside';
import warning from '../utils/warning';
import PopoverContext, { PopoverContextProps, PopoverContextState } from './context';

export interface PopoverProps {
  children?: React.ReactNode;
}

interface State extends PopoverContextState {
  closedTarget: PopoverContextState['target'];
  timestamp: number;
}

const PopoverRoot = ({ children }: PopoverProps) => {
  const [state, setState] = React.useState<State>({
    opened: false,
    target: null,
    content: null,
    closedTarget: null,
    timestamp: 0,
    placement: 'auto'
  });

  React.useEffect(() => {
    if (!state.opened) {
      state.content?.classList?.remove('--opened');
      return undefined;
    }

    if (!state.target || !state.content) {
      warning('Popover Root', 'needs target and content');
      return;
    }

    const instance = createPopper(state.target, state.content, {
      placement: state.placement ?? 'auto',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]
    });
    state.content?.classList?.add('--opened');

    return () => {
      state.content?.classList?.remove('--opened');
      setTimeout(() => instance.destroy(), 100);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.opened]);

  useOnClickOutside(
    state.content,
    () => {
      const justOpened = (Date.now() - state.timestamp ?? 0) < 100;
      if (!state.opened || justOpened) return;

      setState(currentState => ({ ...currentState, opened: false, closedTarget: currentState.target }));
      setTimeout(() => {
        setState(currentState => ({ ...currentState, closedTarget: null }));
      }, 300);
    },
    [state.opened]
  );

  const contextSetValue = React.useCallback<PopoverContextProps['setState']>(newState => {
    setTimeout(() => {
      const resolveNewState = (currentState: State) => ({
        ...currentState,
        ...newState,
        timestamp: Date.now(),
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
    }, 0);

    return () => {
      setState(currentState => {
        if (currentState.target !== newState.target) return currentState;
        return { ...currentState, opened: false };
      });
    };
  }, []);

  const contextValue = React.useMemo<PopoverContextProps>(
    () => ({ setState: contextSetValue, openedTarget: state.opened ? state.target : null }),
    [contextSetValue, state.opened, state.target]
  );

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

export default PopoverRoot;
