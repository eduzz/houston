import * as React from 'react';
import { Observable } from 'rxjs';
export interface IPaginationParams {
    page: number;
    perPage: number;
    [key: string]: any;
}
export interface IPaginationResponse<T> {
    total: number;
    result: T[];
}
export default function usePaginatedObservable<P extends IPaginationParams, T>(observableGenerator: (params: P) => Observable<IPaginationResponse<T>>, initialParams: Partial<P>, deps: React.DependencyList): {
    params: P;
    mergeParams: (newParams: Partial<P & {
        _retry?: number;
    }>, reset?: any) => void;
    initialParams: Partial<P>;
    isLoading: boolean;
    isLoadingMore: boolean;
    total: number;
    result: T[];
    hasMore: boolean;
    error: any;
    retry: () => void;
};
