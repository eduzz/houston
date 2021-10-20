import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
declare type ListSubtitleProps = 'id' | 'className';
export interface IListSubtitleProps extends Pick<TypographyProps, ListSubtitleProps> {
    children: React.ReactNode;
}
declare const _default: React.FC<IListSubtitleProps>;
export default _default;
