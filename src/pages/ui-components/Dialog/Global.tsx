/* eslint-disable sonarjs/cognitive-complexity */
import { memo, useState, useEffect } from 'react';

import usePromiseCallback from '@eduzz/houston-hooks/usePromiseCallback';

import Button from '../Button';
import Dialog from './Dialog';

export interface DialogShowParams {
  message: React.ReactNode;
  title?: string;
  confirmation?: boolean;
  onConfirm?(): any | Promise<any>;
  onCancel?(): any | Promise<any>;
}

let lastPromise = Promise.resolve(false);
let componentCallback: null | ((params: DialogShowParams) => Promise<boolean>);

const DialogGlobal = memo(() => {
  const [opened, setOpened] = useState<boolean>(false);
  const [params, setParams] = useState<DialogShowParams>();
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);

  const onReceiveParams = usePromiseCallback((isSubscribed, params: DialogShowParams): Promise<boolean> => {
    const result = new Promise<boolean>((resolve, reject) => {
      setOpened(true);
      setConfirmLoading(false);
      setCancelLoading(false);

      setParams({
        confirmation: false,
        title: undefined,
        ...params,
        onConfirm: async () => {
          if (!params.onConfirm) {
            resolve(true);
            return;
          }

          try {
            isSubscribed() && setConfirmLoading(true);
            await Promise.resolve(params.onConfirm());
            resolve(true);
          } catch (err) {
            reject(err);
          } finally {
            isSubscribed() && setConfirmLoading(false);
          }
        },
        onCancel: async () => {
          if (!params.onCancel) {
            resolve(true);
            return;
          }

          try {
            isSubscribed() && setCancelLoading(true);
            await Promise.resolve(params.onCancel());
            resolve(false);
          } catch (err) {
            reject(err);
          } finally {
            isSubscribed() && setCancelLoading(false);
          }
        }
      });
    });

    result.finally(() => setOpened(false));
    return result;
  }, []);

  useEffect(() => {
    componentCallback = onReceiveParams;

    return () => {
      componentCallback = null;
    };
  }, [onReceiveParams]);

  return (
    <Dialog visible={opened} onClose={params?.onCancel}>
      <Dialog.Header>{params?.title ?? (params?.confirmation ? 'Confirmação' : 'Atenção')}</Dialog.Header>
      <Dialog.Content>{params?.message}</Dialog.Content>
      <Dialog.Footer>
        {params?.confirmation && (
          <Button onClick={params?.onCancel} variant='text' loading={cancelLoading} disabled={confirmLoading}>
            Cancelar
          </Button>
        )}
        <Button onClick={params?.onConfirm} loading={confirmLoading} disabled={cancelLoading}>
          OK
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
});

function callComponent(params: DialogShowParams): Promise<boolean> {
  //prevent an alert to override another
  return (lastPromise = lastPromise.finally(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 300));
    if (!componentCallback) throw new Error('Please, initialize an DialogGlobal before');
    return componentCallback(params);
  }));
}

/**
 * @deprecated Use Modal from Antd
 * https://ant.design/components/modal/
 */
export function showAlert(params: string | Omit<DialogShowParams, 'confirmation' | 'onCancel'>) {
  return callComponent(typeof params === 'string' ? { message: params } : params);
}

/**
 * @deprecated Use Modal from Antd
 * https://ant.design/components/modal/
 */
export function showConfirm(params: string | Omit<DialogShowParams, 'confirmation'>) {
  return callComponent({ ...(typeof params === 'string' ? { message: params } : params), confirmation: true });
}

/**
 * @deprecated Use Modal from Antd
 * https://ant.design/components/modal/
 */
export default DialogGlobal;
