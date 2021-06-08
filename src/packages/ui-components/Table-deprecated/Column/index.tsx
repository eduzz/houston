import * as React from 'react';

import { TableCellProps } from '@material-ui/core/TableCell';

import { ITableAlign } from '../interfaces';

type ITableColumnExtends = 'id' | 'className';

export interface ITableColumnProps extends Pick<TableCellProps, ITableColumnExtends> {
  width?: number;
  label?: React.ReactNode | boolean;
  /**
   * Unique key, used for sorting
   */
  field: string;
  /**
   * Default `left`
   */
  align?: ITableAlign;
  /**
   * Control of ordered columns
   * Default `false`
   */
  sortable?: boolean;
  /**
   * Only the first and last columns can be fixed.
   * If there are actions in the table, the last fixed column will be disregarded.
   * If there is at least one fixed column, the table takes on a `white-space: no-wrap` style.
   * Default `false`
   */
  fixed?: boolean;
  /**
   * Create an action column (* priority * when use Table.Actions)
   */
  type?: 'action';
}

export default React.memo<ITableColumnProps>(() => null);
