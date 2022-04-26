import * as React from 'react';

import { Color, HoustonTokens } from '@eduzz/houston-tokens';

export function truncateText(value: string, crop: number) {
  if (value?.length <= crop) {
    return value;
  }

  return `${value.slice(0, crop)}...`;
}

export function getReactChildrenComponent(
  children: any,
  componentType: React.ReactElement['type']
): React.ReactElement[] {
  return React.Children.map(children, child => {
    return isReactComponent(child, componentType) ? child : null;
  }).filter((result: any) => !!result);
}

export function getReactChildrenProps<T>(children: any, componentType: React.ReactElement['type']): T[] {
  return React.Children.map(children, child => {
    if (!isReactComponent(child, componentType)) return null;
    return { ...(child as any).props };
  }).filter((result: any) => !!result);
}

export function getReactFirstChildrenProps<T>(children: any, componentType: React.ReactElement['type']): T {
  const result = getReactChildrenProps<T>(children, componentType);
  return result && result[0];
}

export function isReactComponent(child: any, componentType?: React.ReactElement['type']): boolean {
  if (componentType) {
    return child && React.isValidElement(child) && child?.type === componentType;
  }

  return child && React.isValidElement(child);
}

export type Colors = 'primary' | 'positive' | 'negative' | 'informative' | 'warning';

export function getColorFallback(theme: HoustonTokens, colorKey: Colors): Color {
  return theme.feedbackColor[colorKey] ?? theme.brandColor.primary;
}
