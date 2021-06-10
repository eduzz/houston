import * as React from 'react';

import TableHead from '@material-ui/core/TableHead';

import { useContextSelector } from 'use-context-selector';

import TableColumn from '../Column';
import TableContext from '../context';
import TableRow from '../Row';

export interface ITableHeadProps {
  children: React.ReactNode;
  disabledActionsColumn?: boolean;
}

const TableHeader = React.memo<ITableHeadProps>(({ children, disabledActionsColumn }) => {
  const hasActions = useContextSelector(TableContext, context => context.actions?.length > 0);
  const columnActionTitle = useContextSelector(TableContext, context => context.columnActionTitle);

  return (
    <TableHead>
      <TableRow>
        {children}
        {hasActions && !disabledActionsColumn && (
          <TableColumn width={50} align='right'>
            {columnActionTitle ?? 'Ações'}
          </TableColumn>
        )}
      </TableRow>
    </TableHead>
  );
});

export default TableHeader;
