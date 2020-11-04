import { Observable, Subscriber, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import loaderService from 'services/loader';

export function loader<T>() {
  return (source: Observable<T>) => source.lift<T>(new LoaderOperator());
}

class LoaderOperator {
  public call(subscriber: Subscriber<any>, source: Observable<any>): Subscription {
    return source.pipe(delay(500)).subscribe(new LoaderSubscriber(subscriber));
  }
}

class LoaderSubscriber extends Subscriber<any> {
  private ref: string;

  constructor(protected destination: Subscriber<any>) {
    super(destination);

    this.ref = Date.now().toString();
    this.show();
  }

  public _next(value: any): void {
    this.hide();
    this.destination.next(value);
  }

  public _complete(): void {
    this.hide();
    this.destination.complete();
  }

  public _error(err: any): void {
    this.hide();
    this.destination.error(err);
  }

  public _unsubscribe(): void {
    this.hide();
    this.destination.unsubscribe();
  }

  private show(): void {
    loaderService.show(this.ref);
  }

  private hide(): void {
    loaderService.hide(this.ref);
  }
}
