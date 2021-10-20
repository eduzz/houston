import * as React from 'react';
import { Observable } from 'rxjs';
export interface IPaginationParams {
    page: number;
    perPage: number;
    sort?: {
        field: string;
        direction: 'asc' | 'desc';
    };
    [key: string]: any;
}
export interface IPaginationResponse<T> {
    total: number;
    result: T[];
}
export declare type PaginationMergeParams<P> = Partial<P & {
    _retry?: number;
}> | ((currenteParams: Partial<P & {
    _retry?: number;
}>) => Partial<P & {
    _retry?: number;
}>);
export interface IUsePaginatedOptions<P, T> {
    initialParams?: P;
    /** set if the date will be cumulative or not */
    infintyScroll?: boolean;
    onChangeParams: (params: P) => Observable<IPaginationResponse<T>>;
}
export interface IUsePaginatedObservable<P, R> {
    params: P;
    initialParams: Partial<P>;
    isLoading: boolean;
    isLoadingMore: boolean;
    total: number;
    result: R[];
    hasMore: boolean;
    error: any;
    retry: () => void;
    mergeParams: (params: PaginationMergeParams<P>, reset?: boolean) => void;
    /** Sintax sugar for `mergeParams` to change page  */
    handleChangePage: (page: number) => void;
    /** Sintax sugar for `mergeParams` to change perPage  */
    handleChangePerPage: (perPage: number) => void;
    /** Sintax sugar for `mergeParams` to change the sort  */
    handleSort: (sort: IPaginationParams['sort']) => void;
}
/**
 * Hooks to simplify the use of an observable paginated
 * @param options `IUsePaginatedOptions`
 * @param deps React deps
 * @returns `IUsePaginatedObservable`
 */
export default function usePaginatedObservable<P extends IPaginationParams, R>(options: IUsePaginatedOptions<P, R>, deps: React.DependencyList): IUsePaginatedObservable<P, R>;
