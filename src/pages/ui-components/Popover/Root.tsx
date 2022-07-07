import * as React from 'react';

import { createPopper } from '@popperjs/core';

import useOnClickOutside from '../hooks/useOnClickOutside';
import PopoverContext, { IPopoverContext, IPopoverContextState } from './context';

export interface IPopoverProps {
  children?: React.ReactNode;
}

interface IState extends IPopoverContextState {
  closedTarget: IPopoverContextState['target'];
  timestamp: number;
}

const PopoverRoot: React.FC<IPopoverProps> = ({ children }) => {
  const [state, setState] = React.useState<IState>({
    opened: false,
    target: null,
    content: null,
    closedTarget: null,
    timestamp: 0,
    placement: 'auto'
  });

  const popoverContent = React.useRef(state.content);

  React.useLayoutEffect(() => {
    popoverContent.current = state.content;
  }, [state.content]);

  React.useEffect(() => {
    if (!state.opened) {
      popoverContent.current?.classList?.remove('--opened');
      return undefined;
    }

    const instance = createPopper(state.target, popoverContent.current, {
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
    popoverContent.current?.classList?.add('--opened');

    return () => {
      popoverContent.current?.classList?.remove('--opened');
      setTimeout(() => instance.destroy(), 100);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.opened]);

  useOnClickOutside(popoverContent, () => {
    const justOpened = (Date.now() - state.timestamp ?? 0) < 100;
    if (!state.opened || justOpened) return;

    setState(currentState => ({ ...currentState, opened: false, closedTarget: currentState.target }));
    setTimeout(() => {
      setState(currentState => ({ ...currentState, closedTarget: null }));
    }, 300);
  });

  const contextSetValue = React.useCallback<IPopoverContext['setState']>(newState => {
    setTimeout(() => {
      const resolveNewState = (currentState: IState) => ({
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

  const contextValue = React.useMemo<IPopoverContext>(
    () => ({ setState: contextSetValue, openedTarget: state.opened ? state.target : null }),
    [contextSetValue, state.opened, state.target]
  );

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

export default PopoverRoot;
