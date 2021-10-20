import * as React from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
declare type ButtonPropsExtends = 'id' | 'disabled' | 'children' | 'onClick' | 'className' | 'size';
export interface IButtonProps extends Pick<IconButtonProps, ButtonPropsExtends> {
}
declare const _default: React.FC<IButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default _default;
