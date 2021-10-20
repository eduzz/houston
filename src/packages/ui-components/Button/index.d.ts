import * as React from 'react';
import { ButtonProps } from '@mui/material/Button';
declare type ButtonPropsExtends = 'id' | 'onClick' | 'disabled' | 'href' | 'children' | 'type' | 'className' | 'fullWidth' | 'startIcon' | 'endIcon';
export declare type IButtonVariant = 'contained' | 'outlined' | 'text';
export interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends>, React.RefAttributes<HTMLButtonElement> {
    variant?: IButtonVariant;
    loading?: boolean;
    loadingText?: string;
}
declare const _default: React.FC<IButtonProps>;
export default _default;
