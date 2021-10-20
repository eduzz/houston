import * as React from 'react';
import { Observable } from 'rxjs';
/**
 * Create a memoized observable and unsubscribe automatically if component unmount, first value will be undefined
 * @param observableGenerator Function to return a observable
 * @param deps List of deps
 * @returns [observableValue, error, complete, loading]
 */
export default function useObservable<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): [T, any, boolean, boolean];
