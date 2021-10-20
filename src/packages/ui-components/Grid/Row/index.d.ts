import * as React from 'react';
import { GridProps } from '@mui/material/Grid';
import { IContainerType } from '../interfaces';
declare type RowPropsExtends = 'id' | 'className' | 'children' | 'justifyContent' | 'alignItems' | 'style' | 'onClick' | 'onDoubleClick';
export interface IRowProps extends Pick<GridProps, RowPropsExtends> {
    spacing?: IContainerType;
}
declare const _default: React.FC<IRowProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
