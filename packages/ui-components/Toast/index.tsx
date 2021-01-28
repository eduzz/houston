import 'react-toastify/dist/ReactToastify.css';

import * as React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { Theme } from '@material-ui/core/styles';

import themePalette from '../ThemeProvider/_default/palette';

type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {}

let currentTheme: Theme;

export function _setCurrentTheme(theme: Theme) {
  currentTheme = theme;
}

const Toast = {
  success: (content: React.ReactNode, options?: IToastOptions) =>
    toast.success(content, {
      ...options,
      style: { ...(currentTheme ? { background: currentTheme.palette.success.main } : {}) }
    }),

  error: (content: React.ReactNode, options?: IToastOptions) =>
    toast.error(content, {
      ...options,
      style: {
        background: (themePalette.error as any).main
      }
    }),

  info: (content: React.ReactNode, options?: IToastOptions) =>
    toast.info(content, {
      ...options,
      style: {
        background: themePalette.grey[500]
      }
    })
};

export default Toast;
