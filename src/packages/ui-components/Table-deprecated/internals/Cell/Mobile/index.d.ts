import * as React from 'react';
import { ITableCellProps } from '../../../Cell';
import { ITableColumnProps } from '../../../Column';
interface IProps extends ITableCellProps {
    index: number;
    columns?: ITableColumnProps[];
}
declare const CellMobile: React.NamedExoticComponent<IProps>;
export default CellMobile;
