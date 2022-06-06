import { toast, ToastOptions } from 'react-toastify';

import ToastBody from './ToastBody';

type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {}

class Toast {
  static info(content: string, options?: IToastOptions): void {
    toast(<ToastBody content={content} type='informative' />, options);
  }

  static success(content: string, options?: IToastOptions): void {
    toast(<ToastBody content={content} type='positive' />, options);
  }

  static error(content: string, options?: IToastOptions): void {
    toast(<ToastBody content={content} type='negative' />, options);
  }

  static warning(content: string, options?: IToastOptions): void {
    toast(<ToastBody content={content} type='warning' />, options);
  }
}

export default Toast;
