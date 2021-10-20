import * as React from 'react';
export interface ITableEErrorProps {
    error?: any;
    formater?: (error: any) => string;
    onRetry?: () => void;
    children?: React.ReactNode;
}
declare const TableError: React.NamedExoticComponent<ITableEErrorProps>;
export default TableError;
