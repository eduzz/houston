import * as React from 'react';

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: AnyEvent) => void,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
) {
  const callback = React.useRef(handler);

  React.useLayoutEffect(() => {
    callback.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      callback.current(event);
    };

    window.addEventListener(mouseEvent, listener);

    return () => {
      window.removeEventListener(mouseEvent, listener);
    };
  }, [ref, callback, mouseEvent]);
}

export default useOnClickOutside;
