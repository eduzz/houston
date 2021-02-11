import * as React from 'react';

import { TableRowProps } from '@material-ui/core/TableRow';

type ITableRowExtends = 'id' | 'className' | 'style' | 'tabIndex' | 'children';

export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
  /**
   * Row values, used only when there are actions (Table.Actions) in the table
   */
  data?: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Row(props: ITableRowProps): null {
  return null;
}

export default React.memo(Row);
