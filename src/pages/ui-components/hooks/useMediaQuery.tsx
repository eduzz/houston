import { useEffect, useState } from 'react';

/**
 * @deprecated
 */
export default function useMediaQuery(query: string): boolean {
  const formattedQuery = query.replace('@media', '').trim();

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState(getMatches(formattedQuery));

  function handleChange() {
    setMatches(getMatches(formattedQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(formattedQuery);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    const eventName = 'change';
    matchMedia.addEventListener(eventName, handleChange);

    return () => {
      matchMedia.removeEventListener(eventName, handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formattedQuery]);

  return matches;
}
