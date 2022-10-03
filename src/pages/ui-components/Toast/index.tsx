import { toast, ToastOptions } from 'react-toastify';

import ToastBody from './ToastBody';

type ToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';

export interface ToastProps extends Pick<ToastOptions, ToastPropsExtends> {}

/**
 * @deprecated Use Notification from Antd
 * https://ant.design/components/notification/
 */
const Toast = {
  info(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='informative' />, options);
  },

  success(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='positive' />, options);
  },

  error(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='negative' />, options);
  },

  warning(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='warning' />, options);
  }
};

export default Toast;
