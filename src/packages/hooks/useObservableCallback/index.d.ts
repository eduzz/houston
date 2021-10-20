import * as React from 'react';
import { Observable } from 'rxjs';
declare type ExtractObservableResult<P> = P extends Observable<infer T> ? T : never;
/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @param observableGenerator Function to return a observable
 * @param deps List of deps
 * @returns [callbackFunction, observableValue, error, complete, loading]
 */
export default function useObservableCallback<T, F extends (...args: any[]) => Observable<T>>(observableGenerator: F, deps: React.DependencyList): [(...a: Parameters<F>) => void, ExtractObservableResult<ReturnType<F>>, any, boolean, boolean];
export {};
