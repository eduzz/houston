import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import ApiError from 'errors/api';
import { apiRequestFormatter } from 'formatters/apiRequest';
import * as Rx from 'rxjs';
import {
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  map,
  skip,
  startWith,
  switchMap,
  tap
} from 'rxjs/operators';

import { API_ENDPOINT } from '../settings';
import { apiResponseFormatter } from './../formatters/apiResponse';
import authService from './auth';
import tokenService, { TokenService } from './token';

export class ApiService {
  constructor(private apiEndpoint: string, private tokenService: TokenService) {}

  public get<T = any>(url: string, params?: any): Rx.Observable<T> {
    return this.request<T>('GET', url, params).pipe(
      map(({ response }) => response),
      filter(response => response !== undefined)
    );
  }

  public post<T = any>(url: string, body: any): Rx.Observable<T> {
    return this.request<T>('POST', url, body).pipe(
      map(({ response }) => response),
      filter(response => response !== undefined)
    );
  }

  public put<T = any>(url: string, body: any): Rx.Observable<T> {
    return this.request<T>('PUT', url, body).pipe(
      map(({ response }) => response),
      filter(response => response !== undefined)
    );
  }

  public delete<T = any>(url: string, params?: any): Rx.Observable<T> {
    return this.request<T>('DELETE', url, params).pipe(
      map(({ response }) => response),
      filter(response => response !== undefined)
    );
  }

  public upload<T = any>(url: string, data: FormData) {
    return this.request<T>('POST', url, data);
  }

  private request<T = any>(
    method: Method,
    url: string,
    data: any = null,
    retry: boolean = true
  ): Rx.Observable<{ response: T; progress: number }> {
    const progress$ = new Rx.BehaviorSubject(0);

    return this.tokenService.getToken().pipe(
      first(),
      map(token => {
        if (!token) return {};
        return { Authorization: `Bearer ${token}` };
      }),
      switchMap(headers => {
        return axios.request({
          baseURL: this.apiEndpoint,
          url,
          method,
          headers: {
            ...headers,
            'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json'
          },
          params: method === 'GET' ? apiRequestFormatter(data) : null,
          data: method === 'POST' || method === 'PUT' ? apiRequestFormatter(data) : null,
          onUploadProgress: (progress: ProgressEvent) => {
            const result = progress.loaded / progress.total;
            progress$.next(result * 100);
          }
        });
      }),
      tap(() => progress$.next(100)),
      switchMap(res => this.checkNewToken(res)),
      map(res => apiResponseFormatter<T>(res.data) || null),
      startWith(undefined),
      combineLatest(progress$.pipe(distinctUntilChanged()), (response, progress) => ({ response, progress })),
      catchError(err => {
        progress$.complete();
        return this.handleError(err, retry);
      })
    );
  }

  private checkNewToken(response: AxiosResponse): Rx.Observable<AxiosResponse> {
    const token = response.headers['x-token'];

    if (!token) {
      return Rx.of(response);
    }

    return this.tokenService.setToken(token).pipe(map(() => response));
  }
  private handleError(err: AxiosError, retry: boolean) {
    if (!err.config || !err.response) return Rx.throwError(err);

    if (err.response.status !== 401 || !retry) {
      return Rx.throwError(new ApiError(err.config, err.response, err));
    }

    return authService.shouldOpenLogin().pipe(
      first(),
      switchMap(opened => {
        if (opened) {
          return Rx.throwError(new ApiError(err.config, err.response, err));
        }

        authService.openLogin();
        return authService.getUser();
      }),
      skip(1),
      switchMap(user => {
        if (!user) {
          return Rx.throwError(new ApiError(err.config, err.response, err));
        }

        return this.request(err.config.method, err.config.url, err.config.data || err.config.params, false);
      })
    );
  }
}

const apiService = new ApiService(API_ENDPOINT, tokenService);
export default apiService;
