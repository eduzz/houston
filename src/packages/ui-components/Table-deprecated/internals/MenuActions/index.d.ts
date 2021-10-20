import * as React from 'react';
import { MenuProps } from '@mui/material/Menu';
import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';
interface IProps extends Omit<MenuProps, 'open'> {
    anchorEl: HTMLElement;
    onClose: () => void;
    options: ITableOptionProps[];
    currentRow: ITableRow;
}
declare const MenuActions: React.NamedExoticComponent<IProps>;
export default MenuActions;
