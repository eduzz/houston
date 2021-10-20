import * as React from 'react';
import { ITypographyProps } from '../../Typography';
declare type ListTitleProps = 'id' | 'className';
export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
}
declare const _default: React.NamedExoticComponent<IListTitleProps>;
export default _default;
