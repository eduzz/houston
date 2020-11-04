import { from, Observable, of, Operator, Subscriber, Subscription } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { tapSubscribe } from './tapSubscrible';

let globalCacheService: ICacheService;
let keysCreated: string[] = [];
let peddingCache: { [key: string]: any } = {};

export interface ICacheService {
  getItem<T>(key: string): T | Promise<T>;
  setItem<T>(key: string, data: T, persist?: boolean): void | Promise<void>;
  removeItem(key: string): void | Promise<void>;
}

export function setupCacheOperator(cacheService: ICacheService) {
  globalCacheService = cacheService;
}

export default function cache<T>(
  key: string,
  options: { refresh?: boolean; persist?: boolean; expirationMinutes?: number } = {}
) {
  if (!globalCacheService) {
    globalCacheService = new MemoryCache();
  }

  return (source: Observable<T>) =>
    source.lift(
      new CacheOperator<T>(key, { refresh: false, persist: true, expirationMinutes: 5, ...options })
    );
}

export function cacheClean<T>(key?: string) {
  return (source: Observable<T>) =>
    source.pipe(
      tapSubscribe<T>(() =>
        from(
          key
            ? Promise.resolve(globalCacheService.removeItem(key))
            : Promise.all(keysCreated.map(key => Promise.resolve(globalCacheService.removeItem(key)))).then(
                () => (keysCreated = [])
              )
        )
      )
    );
}

class CacheOperator<T> implements Operator<T, T> {
  constructor(
    private key: string,
    private options: { refresh?: boolean; persist?: boolean; expirationMinutes?: number }
  ) {}

  public call(subscriber: Subscriber<T>, source: Observable<T>): Subscription {
    let initalStream$ = of(null);

    if (!this.options.refresh) {
      initalStream$ = from(Promise.resolve(globalCacheService.getItem<{ expireAt: string; data: T }>(this.key))).pipe(
        map(cache => {
          if (!cache || new Date(cache.expireAt) < new Date()) return null;
          return cache.data;
        })
      );
    }

    if (!peddingCache[this.key]) {
      peddingCache[this.key] = initalStream$.pipe(
        switchMap(cache => {
          if (cache) return of(cache);

          return source.pipe(
            switchMap(data => {
              return from(
                Promise.resolve(
                  globalCacheService.setItem(
                    this.key,
                    {
                      expireAt: new Date(new Date().getTime() + this.options.expirationMinutes * 60000).toISOString(),
                      data
                    },
                    this.options.persist
                  )
                ).then(() => {
                  keysCreated.push(this.key);
                  return data;
                })
              );
            })
          );
        }),
        tap(() => setTimeout(() => (peddingCache[this.key] = null), 500)),
        shareReplay(1)
      );
    }

    return peddingCache[this.key].subscribe(subscriber);
  }
}

class MemoryCache implements ICacheService {
  private data: { [key: string]: any } = {};

  getItem<T>(key: string): T {
    return this.data[key];
  }

  setItem<T>(key: string, data: T): void {
    this.data[key] = data;
  }

  removeItem(key: string) {
    delete this.data[key];
  }
}
