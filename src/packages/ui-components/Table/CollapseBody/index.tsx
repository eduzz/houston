import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../CollapseTable/context';
import TableLoading from '../Loading';

export interface ITableCollapseTableBodyProps {
  children: React.ReactNode;
}

const TableCollapseBody = React.memo<ITableCollapseTableBodyProps>(({ children }) => {
  const loading = useContextSelector(TableContext, context => context.loading);
  const loadingText = useContextSelector(TableContext, context => context.loadingText);

  return <tbody>{loading ? <TableLoading text={loadingText} /> : children}</tbody>;
});

export default TableCollapseBody;
