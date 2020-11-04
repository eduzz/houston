export default class ServiceError<T = any> extends Error {
  public readonly ignoreLog: boolean;
  public readonly extraData: T;

  constructor(message: string, extraData?: T, ignoreLog: boolean = true) {
    super(message);
    this.extraData = extraData || null;
    this.ignoreLog = ignoreLog;
  }
}
