import * as React from 'react';

import { Theme, useTheme } from '@emotion/react';

type Query = string | ((antd: Theme['antd']) => string);

function getMatches(query: string): boolean {
  // Prevents SSR issues
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }

  return false;
}

export default function useMediaQuery(queryParam: Query): boolean {
  const theme = useTheme();
  const isCallback = typeof queryParam === 'function';
  const query = React.useMemo(
    () => (isCallback ? queryParam(theme.antd) : queryParam),
    [queryParam, isCallback, theme.antd]
  );

  const [matches, setMatches] = React.useState(() => getMatches(query));

  React.useEffect(() => {
    const handleChange = () => setMatches(getMatches(query));
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
