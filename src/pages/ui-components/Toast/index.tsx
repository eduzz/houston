import { toast, ToastOptions } from 'react-toastify';

import ToastBody from './ToastBody';

type ToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';

export interface ToastProps extends Pick<ToastOptions, ToastPropsExtends> {}

/**
 * @deprecated Use Notification from Antd
 * https://ant.design/components/notification/
 */
const Toast = {
  /**
   * @deprecated Use Notification from Antd
   * https://ant.design/components/notification/
   */
  info(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='informative' />, options);
  },

  /**
   * @deprecated Use Notification from Antd
   * https://ant.design/components/notification/
   */
  success(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='positive' />, options);
  },

  /**
   * @deprecated Use Notification from Antd
   * https://ant.design/components/notification/
   */
  error(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='negative' />, options);
  },

  /**
   * @deprecated Use Notification from Antd
   * https://ant.design/components/notification/
   */
  warning(content: string, options?: ToastProps) {
    toast(<ToastBody content={content} type='warning' />, options);
  }
};

export default Toast;
