// Adicione aqui os Hooks para verificação do eslint, apenas hooks cuso o segundo parametro é o deps
const houstonHooks = [
  'useCallbackGenerator',
  'useObservable',
  'useObservableCallback',
  'useObservableEffect',
  'useObservableRefresh'
];

const asyncHoustonHooks = ['usePromise', 'usePromiseRefresh', 'usePromiseCallback', 'usePromiseEffect'];

module.exports = {
  exhaustiveDeps: (warnOrError = 'warn', customHooks = [], useHoustonHooks = true, useHoustonAsyncHooks = false) => {
    return [
      warnOrError,
      {
        additionalHooks: `^(${[
          ...customHooks,
          ...(useHoustonHooks ? houstonHooks : []),
          ...(useHoustonAsyncHooks ? asyncHoustonHooks : [])
        ].join('|')})$`
      }
    ];
  }
};
