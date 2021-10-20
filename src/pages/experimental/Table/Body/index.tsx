import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../context';
import TableLoading from '../Loading';

export interface ITableHeadProps {
  children: React.ReactNode;
}

const TableBody = React.memo<ITableHeadProps>(({ children }) => {
  const loading = useContextSelector(TableContext, context => context.loading);

  return <tbody>{loading ? <TableLoading /> : children}</tbody>;
});

export default TableBody;
