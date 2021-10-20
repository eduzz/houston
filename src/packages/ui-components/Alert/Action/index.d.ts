import * as React from 'react';
import { IButtonProps } from '../../Button';
export interface IAlertActionProps extends Omit<IButtonProps, 'children'> {
    label: React.ReactNode;
}
declare const _default: React.FC<IAlertActionProps>;
export default _default;
