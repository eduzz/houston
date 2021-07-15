import * as React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useContextSelector } from 'use-context-selector';

import TableColumn from '../Column';
import TableContext from '../context';

export interface ITableHeadProps {
  children: React.ReactNode;
  disabledActionsColumn?: boolean;
}

const TableHeader = React.memo<ITableHeadProps>(({ children, disabledActionsColumn }) => {
  const hasActions = useContextSelector(TableContext, context => context.rows.some(r => r.hasActions));
  const hasCollapse = useContextSelector(TableContext, context => context.rows.some(r => r.hasCollapse));
  const columnActionTitle = useContextSelector(TableContext, context => context.columnActionTitle);

  return (
    <TableHead>
      <TableRow>
        {children}
        {(hasActions || hasCollapse) && !disabledActionsColumn && (
          <TableColumn width={hasCollapse && hasActions ? 100 : 80} align='right'>
            {columnActionTitle ?? 'Ações'}
          </TableColumn>
        )}
      </TableRow>
    </TableHead>
  );
});

export default TableHeader;
