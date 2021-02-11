import Actions, { ITableActionsProps } from './Actions';
import Cell, { ITableCellProps } from './Cell';
import Column from './Column';
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
}

type ITableCell = { cells?: ITableCellProps[] };

type ITableOptions = { options?: ITableOptionProps[] };

export type ITableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface ITableRow extends ITableRowProps, ITableCell, ITableOptions {}

export interface ITableActions extends ITableActionsProps, ITableOptions {}

export interface ITableSortable {
  field: string;
  order: 'asc' | 'desc';
}

export interface ITableMessages {
  noData?: React.ReactNode;
}
