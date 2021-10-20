import * as React from 'react';
import { TooltipProps } from '@mui/material/Tooltip';
declare type ITooltipPlacement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
declare type ITooltipExtends = 'open' | 'onOpen' | 'onClose' | 'id';
export interface ITooltipProps extends Pick<TooltipProps, ITooltipExtends> {
    title: React.ReactNode;
    placement?: ITooltipPlacement;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const _default: React.FC<ITooltipProps>;
export default _default;
