import { useEffect } from 'react';

export default function useEscapeKey(callback: () => void) {
  const ESCAPE_KEY = 'Escape';

  useEffect(() => {
    function handlePressKey(event: KeyboardEvent) {
      if (event.key === ESCAPE_KEY) {
        callback();
      }
    }

    window.addEventListener('keydown', handlePressKey);

    return () => {
      window.removeEventListener('keydown', handlePressKey);
    };
  }, [callback]);
}
