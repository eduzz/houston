import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../context';
import TableLoading from '../Loading';

export interface ITableBodyProps {
  children: React.ReactNode;
}

const TableBody = React.memo<ITableBodyProps>(({ children }) => {
  const loading = useContextSelector(TableContext, context => context.loading);
  const loadingText = useContextSelector(TableContext, context => context.loadingText);

  return <tbody>{loading ? <TableLoading text={loadingText} /> : children}</tbody>;
});

export default TableBody;
