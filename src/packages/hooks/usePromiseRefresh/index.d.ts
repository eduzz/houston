import * as React from 'react';
/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns [value, error, loading, refresh]
 */
export default function usePromiseRefresh<T>(promiseGenerator: () => Promise<T>, deps: React.DependencyList): [T, any, boolean, () => void];
