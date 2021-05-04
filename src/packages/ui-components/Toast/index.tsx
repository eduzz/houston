import * as React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { Theme } from '@material-ui/core/styles';

type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {}

let currentTheme: Theme;

export function _setCurrentTheme(theme: Theme) {
  currentTheme = theme;
}

class Toast {
  private static defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false
  };

  static success(content: React.ReactNode, options?: IToastOptions): void {
    toast.success(content, {
      ...this.defaultOptions,
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.success.main } : {}) }
    });
  }

  static error(content: React.ReactNode, options?: IToastOptions): void {
    toast.error(content, {
      ...this.defaultOptions,
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.error.main } : {}) }
    });
  }

  static info(content: React.ReactNode, options?: IToastOptions): void {
    toast.info(content, {
      ...this.defaultOptions,
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.grey[500] } : {}) }
    });
  }
}

export default Toast;
