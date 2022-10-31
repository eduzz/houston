/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';

import { createPopper } from '@popperjs/core';

import useOnClickOutside from '../hooks/useOnClickOutside';
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

  const popoverContent = React.useRef(state.content);

  React.useLayoutEffect(() => {
    popoverContent.current = state.content;
  }, [state.content]);

  React.useEffect(() => {
    if (!state.opened) {
      popoverContent.current?.classList?.remove('hst-popover-opened');
      return undefined;
    }

    if (!state.target || !state.content) {
      warning('Popover Root', 'needs target and content');
      return;
    }

    const instance = createPopper(state.target, state.content, {
      placement: state.placement ?? 'auto',
      strategy: 'fixed',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 12]
          }
        }
      ]
    });

    popoverContent.current?.classList?.add('hst-popover-opened');

    return () => {
      popoverContent.current?.classList?.remove('hst-popover-opened');
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

/**
 * @deprecated Use Popover from Antd
 * https://ant.design/components/popover/
 */
export default PopoverRoot;
