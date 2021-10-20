import * as React from 'react';
export interface ITableHeadProps {
    children: React.ReactNode;
    disabledActionsColumn?: boolean;
}
declare const TableHeader: React.NamedExoticComponent<ITableHeadProps>;
export default TableHeader;
