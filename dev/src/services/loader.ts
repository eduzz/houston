import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class LoaderService {
  private refs = new BehaviorSubject<string[]>([]);

  public shouldShow(): Observable<boolean> {
    return this.refs.asObservable().pipe(map(refs => refs.length > 0));
  }

  public show(ref: string): void {
    if (typeof ref !== 'string') {
      throw new Error('Loader.show needs a ref string value');
    }

    if (this.refs.value.includes(ref)) return;
    this.refs.next([...this.refs.value, ref]);
  }

  public hide(ref: string): void {
    if (typeof ref !== 'string') {
      throw new Error('Loader.hide needs a ref string value');
    }

    this.refs.next([...this.refs.value.filter(r => r !== ref)]);
  }
}

const loaderService = new LoaderService();
export default loaderService;
