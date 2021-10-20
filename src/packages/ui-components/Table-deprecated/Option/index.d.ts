import * as React from 'react';
declare type ITableOptionExtends = 'id' | 'className' | 'children';
declare type IOptionFunction = (data: unknown) => boolean;
export interface ITableOptionProps extends Pick<React.HTMLAttributes<HTMLDivElement>, ITableOptionExtends> {
    onClick?: (data: unknown) => void;
    disabled?: IOptionFunction | boolean;
    hide?: IOptionFunction | boolean;
    icon?: React.ReactNode;
}
declare const _default: React.FC<ITableOptionProps>;
export default _default;
