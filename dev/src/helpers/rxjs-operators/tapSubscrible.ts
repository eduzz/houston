import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export function tapSubscribe<T>(next: (x: T) => Observable<any>) {
  return (source: Observable<T>) => source.pipe(switchMap(value => next(value).pipe(map(() => value))));
}
