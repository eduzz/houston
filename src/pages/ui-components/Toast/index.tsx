import { toast, ToastOptions } from 'react-toastify';

import ToastBody from './ToastBody';

type ToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';

export interface ToastProps extends Pick<ToastOptions, ToastPropsExtends> {}

export class Toast {
  public static info(content: string, options?: ToastProps): void {
    toast(<ToastBody content={content} type='informative' />, options);
  }

  public static success(content: string, options?: ToastProps): void {
    toast(<ToastBody content={content} type='positive' />, options);
  }

  public static error(content: string, options?: ToastProps): void {
    toast(<ToastBody content={content} type='negative' />, options);
  }

  public static warning(content: string, options?: ToastProps): void {
    toast(<ToastBody content={content} type='warning' />, options);
  }
}

export default Toast;
