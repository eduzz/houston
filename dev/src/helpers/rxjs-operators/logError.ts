import Toast from 'components/Shared/Toast';
import { Observable, Operator, Subscriber, Subscription } from 'rxjs';
import logService from 'services/log';

export function logError<T>(showToaster: boolean = false) {
  return (source: Observable<T>) => source.lift<T>(new LogErrorOperator(showToaster));
}

class LogErrorOperator<T> implements Operator<T, T> {
  constructor(private showToaster: boolean) {}

  public call(subscriber: Subscriber<any>, source: Observable<any>): Subscription {
    return source.subscribe(new LogErrorSubscriber(subscriber, this.showToaster));
  }
}

class LogErrorSubscriber extends Subscriber<any> {
  constructor(protected destination: Subscriber<any>, private showToaster: boolean) {
    super(destination);
  }

  public _next(value: any): void {
    this.destination.next(value);
  }

  public _complete(): void {
    this.destination.complete();
  }

  public _error(err: any): void {
    logService.handleError(err);
    if (this.showToaster) {
      Toast.error(err);
    }

    this.destination.error(err);
  }
}
