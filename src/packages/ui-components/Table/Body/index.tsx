import * as React from 'react';

import TableBodyMUI from '@material-ui/core/TableBody';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../context';
import TableLoading from '../Loading';

export interface ITableHeadProps {
  children: React.ReactNode;
}

const TableBody = React.memo<ITableHeadProps>(({ children }) => {
  const loading = useContextSelector(TableContext, context => context.loading);

  return <TableBodyMUI>{loading ? <TableLoading /> : children}</TableBodyMUI>;
});

export default TableBody;
