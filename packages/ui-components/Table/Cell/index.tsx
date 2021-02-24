import * as React from 'react';

import { TableCellProps } from '@material-ui/core/TableCell';

type ITableCellExtends = 'id' | 'className' | 'style' | 'children' | 'padding' | 'colSpan' | 'align';

export interface ITableCellProps extends Pick<TableCellProps, ITableCellExtends> {
  /**
   * Default `false`
   */
  truncate?: number;
}

export default React.memo<ITableCellProps>(() => null);
