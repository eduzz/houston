import { config as rxjsConfig } from 'rxjs';

export interface IHoustonHooksConfig {
  /**
   * Set a function to be called when a unhandled error ocurrs,
   * if rxjs onUnhandledError is not already set it will also set this
   */
  onUnhandledError(err: any, origin: 'rxjs' | 'hooks'): void;
}

let _config: IHoustonHooksConfig = {
  onUnhandledError() {
    /*do nothing */
  }
};

export default function setHoustonHooksConfig(config: IHoustonHooksConfig) {
  if (!rxjsConfig?.onUnhandledError) {
    rxjsConfig.onUnhandledError = err => config.onUnhandledError(err, 'rxjs');
  }

  _config = config;
}

export function getConfig() {
  return _config;
}
