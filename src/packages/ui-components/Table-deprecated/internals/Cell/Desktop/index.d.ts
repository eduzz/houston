import * as React from 'react';
import { ITableCellProps } from '../../../Cell';
interface IProps extends ITableCellProps {
    fixed?: boolean;
    list?: boolean;
    hasEndAdornment?: boolean;
}
declare const Cell: React.NamedExoticComponent<IProps>;
export default Cell;
