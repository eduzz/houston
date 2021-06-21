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
  _config = config;

  import('rxjs')
    .then(rxjs => {
      if (rxjs.config && !rxjs.config.onUnhandledError) {
        rxjs.config.onUnhandledError = err => config.onUnhandledError(err, 'rxjs');
      }
    })
    .catch(() => {
      /* Sem problemas, o projeto não tem rxjs */
    });
}

export function getConfig() {
  return _config;
}
