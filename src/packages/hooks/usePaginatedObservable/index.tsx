import * as React from 'react';

import { firstValueFrom, Observable } from 'rxjs';

import usePaginatedPromise, {
  IUsePaginatedPromise,
  IPaginationResponse as IPaginationResponsePromise,
  IPaginationParams as IPaginationParamsPromise,
  IUsePaginatedOptions as IUsePaginatedOptionsPromise
} from '../usePaginatedPromise';

export interface IPaginationParams extends IPaginationParamsPromise {}
export interface IPaginationResponse<T> extends IPaginationResponsePromise<T> {}
export interface IUsePaginatedObservable<P, R> extends IUsePaginatedPromise<P, R> {}

export interface IUsePaginatedOptions<P, T> extends Omit<IUsePaginatedOptionsPromise<P, T>, 'onChangeParams'> {
  onChangeParams: (params: P) => Observable<IPaginationResponse<T>>;
}

/**
 * Hooks to simplify the use of an observable paginated
 * @param options `IUsePaginatedOptions`
 * @param deps React deps
 * @returns `IUsePaginatedObservable`
 */
export default function usePaginatedObservable<P extends IPaginationParams, R>(
  options: IUsePaginatedOptions<P, R>,
  deps: React.DependencyList
): IUsePaginatedObservable<P, R> {
  return usePaginatedPromise(
    {
      ...options,
      onChangeParams: params => firstValueFrom(options.onChangeParams(params))
    },
    [deps]
  );
}
