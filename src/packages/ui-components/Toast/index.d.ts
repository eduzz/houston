import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { ToastOptions } from 'react-toastify';
declare type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {
}
export declare function _setCurrentTheme(theme: Theme): void;
declare class Toast {
    static success(content: React.ReactNode, options?: IToastOptions): void;
    static error(content: React.ReactNode, options?: IToastOptions): void;
    static info(content: React.ReactNode, options?: IToastOptions): void;
}
export default Toast;
