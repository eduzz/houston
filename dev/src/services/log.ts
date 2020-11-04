import * as Sentry from '@sentry/browser';

import IUserToken from '../interfaces/tokens/userToken';
import { ENV, IS_DEVELOPMENT, SENTRY_KEY } from '../settings';

export class LogService {
  constructor(sentryKey: string) {
    Sentry.init({
      dsn: sentryKey,
      environment: ENV
    });
  }

  public setUser(user: IUserToken): void {
    if (!user) {
      Sentry.setUser({
        id: null,
        email: null,
        username: null,
        extra: {}
      });
      return;
    }

    Sentry.setUser({
      id: user.id.toString(),
      email: user.email,
      username: user.email,
      extra: { ...user }
    });
  }

  public breadcrumb(message: string, category: string = 'manual', data: any = {}): void {
    data = data || {};
    delete data.type;

    Sentry.addBreadcrumb({ message, category, data });
  }

  public handleError(err: any): void {
    if (!err) return;

    if (typeof err === 'string') {
      err = new Error(err);
    }

    if (IS_DEVELOPMENT) {
      console.error(err);
    }

    Sentry.withScope(() => {
      Sentry.setExtras({ extra: err.extraData || {} });
      Sentry.captureException(err);
    });
  }
}

const logService = new LogService(SENTRY_KEY);
export default logService;
