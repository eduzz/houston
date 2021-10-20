import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
declare type ListTitleProps = 'id' | 'className';
export interface IListTitleProps extends Pick<TypographyProps, ListTitleProps> {
    children: React.ReactNode;
}
declare const _default: React.FC<IListTitleProps>;
export default _default;
