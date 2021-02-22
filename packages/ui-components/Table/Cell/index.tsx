import * as React from 'react';

import { TableCellProps } from '@material-ui/core/TableCell';

type ITableCellExtends = 'id' | 'className' | 'style' | 'children' | 'padding' | 'colSpan' | 'align';

export interface ITableCellProps extends Pick<TableCellProps, ITableCellExtends> {
  /**
   * Default `false`
   */
  truncate?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Cell(props: ITableCellProps): null {
  return null;
}

export default React.memo(Cell);
