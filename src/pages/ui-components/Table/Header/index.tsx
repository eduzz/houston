import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import usePrevious from '../../utils/usePrevious';
import TableColumn from '../Column';
import TableContext from '../context';
import TableHeaderContext, { TableHeaderContextProps } from './context';

export interface TableHeadProps extends TableHeaderContextProps {
  id?: string;
  children: React.ReactNode;
  columnActionTitle?: string;
  disabledActionsColumn?: boolean;
}

const TableHeader = ({ id, children, disabledActionsColumn, columnActionTitle, ...contextValue }: TableHeadProps) => {
  const loading = useContextSelector(TableContext, context => context.loading);
  const hasActionsContext = useContextSelector(TableContext, context => context.rows.some(r => r.hasActions));
  const hasCollapseContext = useContextSelector(TableContext, context => context.rows.some(r => r.hasCollapse));

  const hasActionsPrevious = usePrevious(hasActionsContext);
  const hasCollapsePrevious = usePrevious(hasCollapseContext);

  const hasActions = loading ? hasActionsPrevious : hasActionsContext;
  const hasCollapse = loading ? hasCollapsePrevious : hasCollapseContext;
  const columnActionHidden = !hasActions && !hasCollapse;

  return (
    <TableHeaderContext.Provider value={contextValue}>
      <thead id={id} className={columnActionHidden ? 'hst-table-action-column-hidden' : undefined}>
        <tr>
          {children}

          {!disabledActionsColumn && (
            <TableColumn
              className={columnActionHidden ? 'hst-table-hidden' : undefined}
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
