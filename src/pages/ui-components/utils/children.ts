import * as React from 'react';

/**
 * @deprecated
 */
export function getReactChildrenComponent(
  children: any,
  componentType: React.ReactElement['type']
): React.ReactElement[] {
  return React.Children.map(children, child => {
    return isReactComponent(child, componentType) ? child : null;
  }).filter((result: any) => !!result);
}

/**
 * @deprecated
 */
export function getReactChildrenProps<T>(children: any, componentType: React.ReactElement['type']): T[] {
  return React.Children.map(children, child => {
    if (!isReactComponent(child, componentType)) return null;
    return { ...(child as any).props };
  }).filter((result: any) => !!result);
}

/**
 * @deprecated
 */
export function getReactFirstChildrenProps<T>(children: any, componentType: React.ReactElement['type']): T {
  const result = getReactChildrenProps<T>(children, componentType);
  return result && result[0];
}

/**
 * @deprecated
 */
export function isReactComponent(child: any, componentType?: React.ReactElement['type']): boolean {
  if (componentType) {
    return child && React.isValidElement(child) && child?.type === componentType;
  }

  return child && React.isValidElement(child);
}
