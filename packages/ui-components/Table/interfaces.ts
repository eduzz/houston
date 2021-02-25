import Actions, { ITableActionsProps } from './Actions';
import Cell, { ITableCellProps } from './Cell';
import Collapse, { ITableCollapseProps } from './Collapse';
import Column, { ITableColumnProps } from './Column';
import Option, { ITableOptionProps } from './Option';
import Pagination from './Pagination';
import Row, { ITableRowProps } from './Row';

export interface ITableSubComponents {
  Column: typeof Column;
  Row: typeof Row;
  Cell: typeof Cell;
  Actions: typeof Actions;
  Option: typeof Option;
  Pagination: typeof Pagination;
  Collapse: typeof Collapse;
}

type ITableCell = { cells?: ITableCellProps[] };

type ITableOptions = { options?: ITableOptionProps[] };

export type ITableCollapseType = 'list' | 'table';

export type ITableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface ITableActions extends ITableActionsProps, ITableOptions {}

export interface ITableCollapse extends ITableCollapseProps {
  columns: ITableColumnProps[];
  rows: ITableRow[];
  actions: ITableActions;
}

export interface ITableRow extends ITableRowProps, ITableCell, ITableOptions {
  collapse: ITableCollapse;
}

export interface ITableSortable {
  field: string;
  order: 'asc' | 'desc';
}

export interface ITableMessages {
  empty?: React.ReactNode;
}
