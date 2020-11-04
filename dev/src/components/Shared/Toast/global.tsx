import React, { useCallback, memo, useState, useEffect } from 'react';

import Toast from '.';

interface IParams {
  message: string;
  error: any;
  timeout?: number;
}

let lastPromise = Promise.resolve();
let globalToast: (message: string, error: any, timeout?: number) => Promise<void>;

const ToastGlobalProvider = memo(() => {
  const [opened, setOpened] = useState<boolean>(false);
  const [params, setParams] = useState<IParams>();
  const [promiseResolve, setPromiseResolve] = useState<() => void>();

  const handleShow = useCallback((message: string, error: any, timeout?: number): Promise<void> => {
    const result = new Promise<void>(resolve => {
      setPromiseResolve(() => resolve);
      setOpened(true);
      setParams({ message, error, timeout });
    });

    result.then(() => setOpened(false));
    return result;
  }, []);

  const handleClose = useCallback(() => {
    promiseResolve && promiseResolve();
  }, [promiseResolve]);

  useEffect(() => {
    if (globalToast) throw new Error('Only one Toast.Global can be initialized');
    globalToast = handleShow;
  }, [handleShow]);

  return <Toast opened={opened} {...params} onClose={handleClose} />;
});

export async function showGlobalToast(message: string, error: any, timeout?: number): Promise<void> {
  if (!globalToast) throw new Error('Please, initialize an Toast.Global before');

  //prevent an alert to overhide another
  return (lastPromise = lastPromise.then(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 300));
    return globalToast(message, error, timeout);
  }));
}

export default ToastGlobalProvider;
