import * as Rx from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { apiResponseFormatter } from '../formatters/apiResponse';

export class StorageService {
  public get<T = any>(key: string): Rx.Observable<T> {
    return Rx.of(true).pipe(
      map(() => localStorage.getItem(key)),
      map(data => (data ? apiResponseFormatter(JSON.parse(data)) : null)),
      catchError(() => Rx.of(null))
    );
  }

  public set<T = any>(key: string, value: T): Rx.Observable<T> {
    return Rx.of(true).pipe(
      map(() => localStorage.setItem(key, JSON.stringify(value))),
      map(() => value)
    );
  }

  public clear(regexp: RegExp): Rx.Observable<void> {
    return Rx.of(Object.keys(localStorage)).pipe(
      map(keys => {
        if (regexp) {
          keys = keys.filter(k => regexp.test(k));
        }

        keys.forEach(k => localStorage.removeItem(k));
        return null;
      })
    );
  }
}

const storageService = new StorageService();
export default storageService;
