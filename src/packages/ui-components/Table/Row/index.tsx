import * as React from 'react';

import TableRowMUI, { TableRowProps } from '@material-ui/core/TableRow';

type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'onClick' | 'onDoubleClick';

export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
  /**
   * Row values, used only when there are actions (Table.Actions) in the table
   */
  data?: unknown;
  endAdornment?: React.ReactNode;
  children?: React.ReactNode;
}

const TableRow = React.memo<ITableRowProps>(({ children, ...props }) => {
  return <TableRowMUI {...props}>{children}</TableRowMUI>;
});

export default TableRow;
