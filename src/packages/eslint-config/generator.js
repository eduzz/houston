// Adicione aqui os Hooks para verificação do eslint, apenas hooks cuso o segundo parametro é o deps
const houstonHooks = [
  'useCallbackGenerator',
  'useCallbackObservable',
  'useObservable',
  'usePaginatedObservable',
  'usePaginatedPromise',
  'usePromise',
  'useRetryableObservable'
];

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
