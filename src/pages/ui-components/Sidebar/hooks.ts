import * as React from 'react';

export interface ISidebarHook {
  pathname?: string;
}

export default function useSidebar(config: ISidebarHook) {
  const { pathname } = config;

  /*
    Checks if the menu item is active according to its path.
  */
  const isActive = React.useCallback(
    (path: string | string[]) => {
      if (Array.isArray(path)) {
        return path.includes(pathname) || !!path.filter(v => v === pathname || pathname.startsWith(v)).length;
      }

      return path === pathname || pathname.startsWith(path);
    },
    [pathname]
  );

  return { isActive };
}
