import * as React from 'react';

export interface ITableItem<T> {
  data: T;
  index: number;
  striped: boolean;
}

export interface ITableAction {
  display: React.ReactNode;
  onClick: () => void;
}
