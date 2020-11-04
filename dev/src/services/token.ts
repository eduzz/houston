import { logError } from 'helpers/rxjs-operators/logError';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, tap, map } from 'rxjs/operators';

import storageService, { StorageService } from './storage';

export class TokenService {
  private token$: ReplaySubject<string>;

  constructor(private storageService: StorageService) {
    this.token$ = new ReplaySubject(1);

    this.storageService
      .get('authToken')
      .pipe(logError())
      .subscribe(token => this.token$.next(token));
  }

  public getToken(): Observable<string> {
    return this.token$.pipe(distinctUntilChanged());
  }

  public setToken(token: string): Observable<string> {
    return this.storageService.set('authToken', token).pipe(tap(() => this.token$.next(token)));
  }

  public clearToken(): Observable<void> {
    return this.setToken(null).pipe(map(() => null));
  }

  public decode<T>(token: string): T {
    try {
      const data = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;

      return currentTime > data.exp ? null : data;
    } catch (err) {
      return null;
    }
  }
}

const tokenService = new TokenService(storageService);
export default tokenService;
