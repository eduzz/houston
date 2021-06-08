import * as React from 'react';

import Body from './Body';
import Cell from './Cell';
import Column from './Column';
import Empty from './Empty';
import Header from './Header';
import Pagination from './Pagination';
import Row from './Row';
import { ITableProps } from './Table';

export interface ITableItem<T> {
  data: T;
  index: number;
  striped: boolean;
}

export interface ITableAction {
  display: React.ReactNode;
  onClick: () => void;
}

export interface ITableSort {
  field: string;
  direction: 'asc' | 'desc';
}

export type ITableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type TableComponent = React.NamedExoticComponent<ITableProps> & {
  Cell?: typeof Cell;
  Header?: typeof Header;
  Body?: typeof Body;
  Column?: typeof Column;
  Row?: typeof Row;
  Empty?: typeof Empty;
  Pagination?: typeof Pagination;
};
