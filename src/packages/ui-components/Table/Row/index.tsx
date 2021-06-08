import * as React from 'react';

import TableRowMUI, { TableRowProps } from '@material-ui/core/TableRow';

import TableContext from '../context';

type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'onClick' | 'onDoubleClick';

export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
  /**
   * Row values, used only when there are actions (Table.Actions) in the table
   */
  data?: unknown;
  children?: React.ReactNode;
}

const TableRow = React.memo<ITableRowProps>(({ children, ...props }) => {
  const context = React.useContext(TableContext);

  return (
    <TableRowMUI hover={!context.stripedRows} {...props}>
      {children}
    </TableRowMUI>
  );
});

export default TableRow;
