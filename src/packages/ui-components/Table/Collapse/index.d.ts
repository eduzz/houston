import * as React from 'react';
export interface ITableCollapseProps {
    onOpen?: (data: unknown, index: number) => void;
    onClose?: (data: unknown, index: number) => void;
    disabled?: boolean;
    children?: React.ReactNode;
    disabledPadding?: boolean;
    disableBackground?: boolean;
}
declare const TableCollapse: React.NamedExoticComponent<ITableCollapseProps>;
export default TableCollapse;
