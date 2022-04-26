import { toast, ToastOptions } from 'react-toastify';

import { getCurrentTime } from '../styles/ThemeProvider/_state';

type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {}

class Toast {
  static success(content: React.ReactNode, options?: IToastOptions): void {
    const theme = getCurrentTime();
    toast.success(content, {
      ...options,
      style: { ...(theme ? { background: theme.feedbackColor.positive.pure } : {}) }
    });
  }

  static error(content: React.ReactNode, options?: IToastOptions): void {
    const theme = getCurrentTime();
    toast.error(content, {
      ...options,
      style: { ...(theme ? { background: theme.feedbackColor.negative.pure } : {}) }
    });
  }

  static info(content: React.ReactNode, options?: IToastOptions): void {
    const theme = getCurrentTime();
    toast.info(content, {
      ...options,
      style: { ...(theme ? { background: theme.feedbackColor.informative.pure } : {}) }
    });
  }
}

export default Toast;
