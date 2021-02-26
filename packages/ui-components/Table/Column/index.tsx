import * as React from 'react';

import { TableCellProps } from '@material-ui/core/TableCell';

import { ITableAlign } from '../interfaces';

type ITableColumnExtends = 'id' | 'className' | 'width';

export interface ITableColumnProps extends Pick<TableCellProps, ITableColumnExtends> {
  label: React.ReactNode;
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
}

export default React.memo<ITableColumnProps>(() => null);
