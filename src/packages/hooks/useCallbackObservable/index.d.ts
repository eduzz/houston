import * as React from 'react';
import { Observable } from 'rxjs';
/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @returns a memoized version of the callback that only changes if one of the inputs has changed
 */
export default function useCallbackObservable<T>(observableGenerator: (...args: any[]) => Observable<T>, deps: React.DependencyList): [() => void, T | undefined, any, boolean, undefined];
