import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableColumn from '../Column';
import TableContext from '../context';
import TableHeaderContext, { TableHeaderContextProps } from './context';

export interface TableHeadProps extends TableHeaderContextProps {
  children: React.ReactNode;
  columnActionTitle?: string;
  disabledActionsColumn?: boolean;
}

const TableHeader = ({ children, disabledActionsColumn, columnActionTitle, ...contextValue }: TableHeadProps) => {
  const hasActions = useContextSelector(TableContext, context => context.rows.some(r => r.hasActions));
  const hasCollapse = useContextSelector(TableContext, context => context.rows.some(r => r.hasCollapse));
  const columnActionHidden = !hasActions && !hasCollapse;

  return (
    <TableHeaderContext.Provider value={contextValue}>
      <thead className={columnActionHidden ? '--hts-action-column-hidden' : undefined}>
        <tr>
          {children}

          {!disabledActionsColumn && (
            <TableColumn
              className={columnActionHidden ? '--hts-hidden' : undefined}
              width={hasActions && hasCollapse ? 100 : hasActions || hasCollapse ? 75 : 0}
              align='right'
            >
              {columnActionTitle ?? 'Ações'}
            </TableColumn>
          )}
        </tr>
      </thead>
    </TableHeaderContext.Provider>
  );
};

export default React.memo(TableHeader);
