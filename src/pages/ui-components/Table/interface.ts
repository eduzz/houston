import * as React from 'react';

export interface TableCollapse {
  onOpen?: (data: unknown, index: number) => void;
  onClose?: (data: unknown, index: number) => void;
  content: React.ReactNode;
  disabled?: boolean;
  disabledPadding?: boolean;
  disableBackground?: boolean;
}

export interface TableAction {
  key: string;
  onClick: (data: unknown, index?: number) => void;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  order?: number;
}

export interface TableItem<T> {
  data: T;
  index: number;
  striped: boolean;
}

export interface TableSort {
  field: string;
  direction: 'asc' | 'desc';
}

export interface TableActionCallback<T> {
  data: T;
  index?: number;
}

export type TableSize = 'small' | 'medium';

export type TableAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
