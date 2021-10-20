import * as React from 'react';
import { MenuProps } from '@mui/material/Menu';
import { ITableAction } from '../interface';
interface IProps extends MenuProps {
    anchorEl: HTMLElement;
    onClose: () => void;
    options: ITableAction[];
    rowData: unknown;
    rowIndex: number;
}
declare const MenuActions: React.NamedExoticComponent<IProps>;
export default MenuActions;
