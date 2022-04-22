export interface IHoustonHooksConfig {
  /**
   * Set a function to be called when a unhandled error ocurrs,
   * if rxjs onUnhandledError is not already set it will also set this
   */
  onUnhandledError(err: any, origin: 'rxjs' | 'hooks'): void;
  /**
   * Set the first page of pagination hooks
   */
  pagination?: { pageStart: number; perPage: number };
}

let _config: IHoustonHooksConfig = {
  onUnhandledError() {
    /*do nothing */
  },
  pagination: { pageStart: 1, perPage: 25 }
};

export default function setHoustonHooksConfig(config: IHoustonHooksConfig) {
  _config = {
    onUnhandledError: () => null,
    ..._config,
    ...config,
    pagination: {
      pageStart: 1,
      perPage: 25,
      ..._config.pagination,
      ...(config.pagination ?? {})
    }
  };

  configRxjs();
}

async function configRxjs() {
  try {
    const rxjs = await import('rxjs');

    if (rxjs.config && !rxjs.config.onUnhandledError) {
      rxjs.config.onUnhandledError = err => _config.onUnhandledError(err, 'rxjs');
    }
  } catch (err) {
    /* Sem problemas, o projeto não tem rxjs */
  }
}

export function getConfig() {
  return _config;
}
