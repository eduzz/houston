import * as React from 'react';
export interface ITableActionOptionProp {
    children?: React.ReactNode;
    onClick: (data: unknown, index?: number) => void;
    icon?: React.ReactNode;
    disabled?: boolean;
}
declare const TableActionOption: React.NamedExoticComponent<ITableActionOptionProp>;
export default TableActionOption;
