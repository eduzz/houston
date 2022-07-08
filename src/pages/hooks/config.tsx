export interface IHoustonHooksConfig {
  /**
   * Set the first page of pagination hooks
   */
  pagination?: { pageStart: number; perPage: number };
  /**
   * Set a function to be called when a unhandled error ocurrs,
   * if rxjs onUnhandledError is not already set it will also set this
   */
  onUnhandledError(err: any, origin: 'rxjs' | 'hooks'): void;
}

let _config: IHoustonHooksConfig = {
  onUnhandledError(err) {
    console.error(err);
    /*do nothing */
  },
  pagination: { pageStart: 1, perPage: 25 }
};

export default function setHoustonHooksConfig(config: IHoustonHooksConfig) {
  _config = {
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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const rxjs = require('rxjs');

    if (rxjs.config && !rxjs.config.onUnhandledError) {
      rxjs.config.onUnhandledError = (err: any) => _config.onUnhandledError(err, 'rxjs');
    }
  } catch (err) {
    /* Sem problemas, o projeto não tem rxjs */
  }
}

export function getConfig() {
  return _config;
}
