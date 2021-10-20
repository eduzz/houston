import * as React from 'react';

import { TableRowProps } from '@mui/material/TableRow';

type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'children' | 'onClick' | 'onDoubleClick';

export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
  /**
   * Row values, used only when there are actions (Table.Actions) in the table
   */
  data?: unknown;
  endAdornment?: React.ReactNode;
}

export default (() => null) as React.FC<ITableRowProps>;
