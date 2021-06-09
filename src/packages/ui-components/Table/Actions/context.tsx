import * as React from 'react';

export interface ITableActionOption {
  key: string;
  onClick: (data: unknown, index?: number) => void;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  order?: number;
}

export interface ITableActionContext {
  options: ITableActionOption[];
  registerOption: (option: Omit<ITableActionOption, 'key'>) => () => void;
}

const TableActionContext = React.createContext<ITableActionContext>({
  options: [],
  registerOption: () => () => null
});

export default TableActionContext;
