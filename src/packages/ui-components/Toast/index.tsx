import * as React from 'react';

import { Theme } from '@material-ui/core/styles';
import { toast, ToastOptions } from 'react-toastify';

type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {}

let currentTheme: Theme;

export function _setCurrentTheme(theme: Theme) {
  currentTheme = theme;
}

class Toast {
  static success(content: React.ReactNode, options?: IToastOptions): void {
    toast.success(content, {
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.success.main } : {}) }
    });
  }

  static error(content: React.ReactNode, options?: IToastOptions): void {
    toast.error(content, {
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.error.main } : {}) }
    });
  }

  static info(content: React.ReactNode, options?: IToastOptions): void {
    toast.info(content, {
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.info.main } : {}) }
    });
  }
}

export default Toast;
