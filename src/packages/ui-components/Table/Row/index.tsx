import * as React from 'react';

import TableRowMUI, { TableRowProps } from '@material-ui/core/TableRow';

import { useContextSelector } from 'use-context-selector';

import TableContext from '../context';

type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'onClick' | 'onDoubleClick';

export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
  children?: React.ReactNode;
}

const TableRow = React.memo<ITableRowProps>(({ children, ...props }) => {
  const stripedRows = useContextSelector(TableContext, context => context.stripedRows);

  return (
    <TableRowMUI hover={!stripedRows} {...props}>
      {children}
    </TableRowMUI>
  );
});

export default TableRow;
