import * as React from 'react';
import { observerFunction } from '../useObservable';
/**
 * Create a memoized observable and unsubscribe automatically if component unmount and a
 * retry function
 * @returns [observableValue, error, completed, retryFunction, loading]
 */
export default function useRetryableObservable<T>(observableGenerator: observerFunction<T>, deps: React.DependencyList): [T | undefined, any, boolean, () => void, boolean, undefined];
