import { Component } from 'react';

import { Observable, Operator, Subscriber, Subscription, TeardownLogic } from 'rxjs';

interface IBindableComponent {
  bindComponentSubscriptions?: Subscription[];
  componentWillUnmount?(): void;
}

export function bindComponent<T>(component: Component) {
  return (source: Observable<T>) => source.lift<T>(new BindComponentOperator(component));
}

class BindComponentOperator<T> implements Operator<T, T> {
  constructor(private component: IBindableComponent) {}

  public call(subscriber: Subscriber<any>, source: Observable<any>): TeardownLogic {
    const subscription = source.subscribe(subscriber);

    if (!this.component.bindComponentSubscriptions) {
      this.component.bindComponentSubscriptions = [];

      const originalWillUnmount = this.component.componentWillUnmount;
      this.component.componentWillUnmount = () => {
        this.component.bindComponentSubscriptions.forEach((s: Subscription) => {
          s.unsubscribe();
        });

        originalWillUnmount && originalWillUnmount();
      };
    }

    this.component.bindComponentSubscriptions.push(subscription);
    return subscription;
  }
}
