import * as React from 'react';

import { getReactChildrenProps, getReactFirstChildrenProps } from '../Helpers/functions';

export type ReactChildrenOrNode = React.ReactChildren | React.ReactNode;
export type ReactChild = React.ReactElement;

export function useChildrenProps<T>(children: ReactChildrenOrNode, componentType: React.ReactElement['type']): T[] {
  const result = React.useMemo(() => {
    return getReactChildrenProps<T>(children, componentType);
  }, [children, componentType]);

  return result;
}

export function useFirstChildrenProps<T>(children: ReactChildrenOrNode, componentType: React.ReactElement['type']): T {
  const result = React.useMemo(() => {
    return getReactFirstChildrenProps<T>(children, componentType);
  }, [children, componentType]);

  return result;
}
