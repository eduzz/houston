import * as React from 'react';
import { AlertProps, AlertColor } from '@mui/material/Alert';
import { IAlertActionProps } from './Action';
declare type AlertPropsExtends = 'id' | 'className' | 'children' | 'severity' | 'onClose' | 'icon';
interface IAlertProps extends Pick<AlertProps, AlertPropsExtends>, React.RefAttributes<AlertProps> {
    type?: AlertColor;
    closable?: boolean;
    multiline?: boolean;
}
declare const _default: React.FC<IAlertProps> & {
    Title: React.FC<import("./Title").IAlertTitleProps>;
    Action: React.FC<IAlertActionProps>;
};
export default _default;
