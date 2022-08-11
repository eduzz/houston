import { createContext } from 'use-context-selector';

export interface TableRowContextProps {
  data: unknown;
  index: number;
  portals: { actions: string; collapse: string };
  closeMenu: () => void;
  showCollapse: boolean;
  registerCollapse: () => () => void;
  registerAction: () => () => void;
  setActionLoading: (loading: boolean) => void;
}

const TableRowContext = createContext<TableRowContextProps>({
  data: null,
  index: 0,
  portals: { actions: '', collapse: '' },
  closeMenu: () => null,
  showCollapse: false,
  registerAction: () => () => null,
  registerCollapse: () => () => null,
  setActionLoading: () => null
});

export default TableRowContext;
