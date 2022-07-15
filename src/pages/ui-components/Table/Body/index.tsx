import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../context';
import TableLoading from '../Loading';

export interface TableBodyProps {
  children: React.ReactNode;
}

const TableBody = React.memo<TableBodyProps>(({ children }) => {
  const loading = useContextSelector(TableContext, context => context.loading);
  const loadingText = useContextSelector(TableContext, context => context.loadingText);

  return <tbody>{loading ? <TableLoading text={loadingText} /> : children}</tbody>;
});

export default TableBody;
