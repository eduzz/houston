import * as React from 'react';

import { getReactChildrenProps, getReactFirstChildrenProps, getReactChildrenComponent } from '../utils/children';

export type ReactChildrenOrNode = React.ReactChildren | React.ReactNode;
export type ReactChild = React.ReactElement;

/**
 * @deprecated
 */
export function useChildrenProps<T = any>(
  children: ReactChildrenOrNode,
  componentType: React.ReactElement['type']
): T[] {
  return React.useMemo(() => {
    return getReactChildrenProps<T>(children, componentType);
  }, [children, componentType]);
}

/**
 * @deprecated
 */
export function useFirstChildrenProps<T>(children: ReactChildrenOrNode, componentType: React.ReactElement['type']): T {
  return React.useMemo(() => {
    return getReactFirstChildrenProps<T>(children, componentType);
  }, [children, componentType]);
}

/**
 * @deprecated
 */
export function useChildrenComponent(children: any, componentType: React.ReactElement['type']) {
  return React.useMemo(() => {
    return getReactChildrenComponent(children, componentType);
  }, [children, componentType]);
}
