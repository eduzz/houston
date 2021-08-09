import * as React from 'react';

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
    <thead>
      <tr>
        {children}

        {hasActions && !disabledActionsColumn && (
          <TableColumn width={30} align='right'>
            {columnActionTitle ?? 'Ações'}
          </TableColumn>
        )}

        {hasCollapse && <TableColumn width={30} />}
      </tr>
    </thead>
  );
});

export default TableHeader;
