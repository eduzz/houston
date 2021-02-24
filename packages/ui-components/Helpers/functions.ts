import * as React from 'react';

export function truncateText(value: string, crop: number) {
  if (value?.length <= crop) {
    return value;
  }

  return `${value.slice(0, crop)}...`;
}

export function getReactChildrenProps<T>(
  children: React.ReactChildren | React.ReactNode,
  componentType: React.ReactElement['type']
): T[] {
  return React.Children.map(children, child => {
    if (isReactComponent(child, componentType)) return null;
    return { ...(child as any).props };
  }).filter(result => !!result);
}

export function getReactFirstChildrenProps<T>(
  children: React.ReactChildren | React.ReactNode,
  componentType: React.ReactElement['type']
): T {
  const result = getReactChildrenProps<T>(children, componentType);
  return result && result[0];
}

export function isReactComponent(
  child: React.ReactChildren | React.ReactNode,
  componentType: React.ReactElement['type']
): boolean {
  return !child || !React.isValidElement(child) || child?.type !== componentType;
}
