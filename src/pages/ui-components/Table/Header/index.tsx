import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableColumn from '../Column';
import TableContext from '../context';
import TableHeaderContext, { TableHeaderContextProps } from './context';

export interface TableHeadProps extends TableHeaderContextProps {
  children: React.ReactNode;
  disabledActionsColumn?: boolean;
}

const TableHeader = ({ children, disabledActionsColumn, ...contextValue }: TableHeadProps) => {
  const hasActions = useContextSelector(TableContext, context => context.rows.some(r => r.hasActions));
  const hasCollapse = useContextSelector(TableContext, context => context.rows.some(r => r.hasCollapse));
  const columnActionTitle = useContextSelector(TableContext, context => context.columnActionTitle);

  return (
    <TableHeaderContext.Provider value={contextValue}>
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
    </TableHeaderContext.Provider>
  );
};

export default React.memo(TableHeader);
