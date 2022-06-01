import * as React from 'react';

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T> | T,
  handler: (event: AnyEvent) => void,
  deps: React.DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = React.useCallback((event: AnyEvent) => handler(event), deps ?? []);

  React.useEffect(() => {
    const el = (ref as any)?.current ?? ref;
    if (!el) return undefined;

    let throttle = false;

    const listener = (event: AnyEvent) => {
      if (!el || el.contains(event.target as Node) || throttle) {
        return;
      }

      throttle = true;
      setTimeout(() => (throttle = false), 500);

      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('click', listener);
    };
  }, [ref, callback]);
}

export default useOnClickOutside;
