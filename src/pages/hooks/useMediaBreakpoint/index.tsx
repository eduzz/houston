import * as React from 'react';

import { useTheme } from '@emotion/react';

import useMediaQuery from '../useMediaQuery';

type MediaBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type MediaHandler = 'down' | 'up';

export default function useMediaBreakpoint(breakpoint: MediaBreakpoint, handler: MediaHandler = 'down') {
  const theme = useTheme();

  const screenMap = React.useMemo(
    () => ({
      xs: theme.antd.screenXS,
      sm: theme.antd.screenSM,
      md: theme.antd.screenMD,
      lg: theme.antd.screenLG,
      xl: theme.antd.screenXL,
      xxl: theme.antd.screenXXL
    }),
    [theme]
  );

  const mediaQuery = React.useMemo(() => {
    const screen = screenMap[breakpoint];
    return handler === 'down' ? `(max-width: ${screen}px)` : `(min-width: ${screen}px)`;
  }, [breakpoint, handler, screenMap]);

  return useMediaQuery(mediaQuery);
}
