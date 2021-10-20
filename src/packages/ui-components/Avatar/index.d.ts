import * as React from 'react';
import { AvatarProps } from '@mui/material/Avatar';
declare type AvatarPropsExtends = 'id' | 'className' | 'src' | 'alt' | 'onClick';
export declare type IAvatarSize = 'small' | 'middle' | 'large' | number;
export declare type IAvatarType = 'text' | 'icon';
export interface IAvatarProps extends Pick<AvatarProps, AvatarPropsExtends> {
    /**
     * Default `false`
     */
    filled?: boolean;
    /**
     * Default `icon`
     */
    type?: IAvatarType;
    /**
     * Default `middle`
     */
    size?: IAvatarSize;
}
declare const _default: React.FC<IAvatarProps>;
export default _default;
