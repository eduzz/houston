import * as React from 'react';

import Action from './Action';
import Body from './Body';
import Cell from './Cell';
import Collapse from './Collapse';
import Column from './Column';
import Empty from './Empty';
import Header from './Header';
import Pagination from './Pagination';
import Row from './Row';
import { ITableProps } from './Table';

export interface ITableCollapse {
  onOpen: (data: unknown, index?: number) => void;
  onClose: (data: unknown, index?: number) => void;
  content: React.ReactNode;
  disabled?: boolean;
  disabledPadding?: boolean;
  disableBackground?: boolean;
}

export interface ITableAction {
  key: string;
  onClick: (data: unknown, index?: number) => void;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  order?: number;
}

export interface ITableItem<T> {
  data: T;
  index: number;
  striped: boolean;
}

export interface ITableSort {
  field: string;
  direction: 'asc' | 'desc';
}

export interface ITableActionCallback<T> {
  data: T;
  index?: number;
}

export type ITableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type TableComponent = React.NamedExoticComponent<ITableProps> & {
  Cell?: typeof Cell;
  Header?: typeof Header;
  Body?: typeof Body;
  Column?: typeof Column;
  Collapse?: typeof Collapse;
  Row?: typeof Row;
  Empty?: typeof Empty;
  Pagination?: typeof Pagination;
  Action?: typeof Action;
};
