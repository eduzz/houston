import { useEffect } from 'react';

export function useEscapeKey(callback: () => void) {
  const ESCAPE_KEY = 'Escape';

  useEffect(() => {
    function handlePressKey(event: KeyboardEvent) {
      if (event.key === ESCAPE_KEY) {
        callback && callback();
      }
    }

    window.addEventListener('keydown', handlePressKey);

    return () => {
      window.removeEventListener('keydown', handlePressKey);
    };
  }, [callback]);
}
