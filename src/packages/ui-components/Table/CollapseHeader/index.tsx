import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableColumn from '../Column';
import TableContext from '../context';

export interface ITableCollapseHeadProps {
  children: React.ReactNode;
  disabledActionsColumn?: boolean;
}

const TableCollapseHeader = React.memo<ITableCollapseHeadProps>(({ children, disabledActionsColumn }) => {
  const hasActions = useContextSelector(TableContext, context => context.rows.some(r => r.hasActions));
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
      </tr>
    </thead>
  );
});

export default TableCollapseHeader;
