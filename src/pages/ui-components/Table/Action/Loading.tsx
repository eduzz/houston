import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableRowContext from '../Row/context';

export interface TableActionOptionProp {
  show: boolean;
}

const TableActionLoading = React.memo<TableActionOptionProp>(({ show }) => {
  const registerActionLoading = useContextSelector(TableRowContext, context => context.registerActionLoading);

  React.useEffect(() => {
    registerActionLoading(show);
  }, [registerActionLoading, show]);

  React.useEffect(() => {
    return () => registerActionLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
});

export default TableActionLoading;
