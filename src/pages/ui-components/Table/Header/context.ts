import { createContext } from 'use-context-selector';

export type TableHeaderContextProps = {
  sortField?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (sortField: string, sortDirection: 'asc' | 'desc') => void;
};

const TableHeaderContext = createContext<TableHeaderContextProps>({});

export default TableHeaderContext;
