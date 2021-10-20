import * as React from 'react';
import { Observable } from 'rxjs';
/**
 * Create a memoized observable and unsubscribe automatically if component unmount and a
 * refresh function
 * @returns [observableValue, error, completed, refreshFunction, loading]
 */
export default function useObservableRefresh<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): [T | undefined, any, boolean, () => void, boolean];
