// Adicione aqui os Hooks para verificação do eslint, apenas hooks cuso o segundo parametro é o deps
const houstonHooks = ['useObservable', 'useRetryableObservable', 'useCallbackObservable', 'usePromise'];

module.exports = {
  exhaustiveDeps: (warnOrError = 'warn', customHooks = [], useHoustonHooks = true) => {
    return [
      warnOrError,
      {
        additionalHooks: `(${[...customHooks, ...(useHoustonHooks ? houstonHooks : [])].join('|')})`
      }
    ];
  }
};
