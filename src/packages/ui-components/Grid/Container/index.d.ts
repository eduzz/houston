import * as React from 'react';
import { ContainerProps } from '@mui/material/Container';
import { IContainerType } from '../interfaces';
declare type ContainerPropsExtends = 'id' | 'className' | 'children' | 'style' | 'tabIndex';
export declare type IContainterLayout = 'fluid' | 'solid';
export interface IContainerProps extends Pick<ContainerProps, ContainerPropsExtends> {
    /**
     * Type container
     *
     * `comfortable` spacing big
     * `cozy` spacing medium
     * `compact` spacing small
     *
     *  default `cozy`
     */
    spacing?: IContainerType;
    /**
     * Types layout
     *
     * `fluid` max-width ignored
     * `solid` limited
     *
     * default `solid`
     */
    layout?: IContainterLayout;
}
declare const _default: React.FC<IContainerProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
