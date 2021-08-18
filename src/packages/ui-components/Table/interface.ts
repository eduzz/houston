import * as React from 'react';

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

export type ITableSize = 'small' | 'medium';

export type ITableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
