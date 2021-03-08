import * as React from 'react';

import { TableCellProps } from '@material-ui/core/TableCell';

type ITableCellExtends =
  | 'id'
  | 'className'
  | 'children'
  | 'padding'
  | 'colSpan'
  | 'align'
  | 'onClick'
  | 'onDoubleClick';

export interface ITableCellProps extends Pick<TableCellProps, ITableCellExtends> {
  /**
   * Default `false`
   */
  truncate?: number;
}

export default React.memo<ITableCellProps>(() => null);
