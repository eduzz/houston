import * as React from 'react';

import { TableCellProps } from '@material-ui/core/TableCell';

import { ITableAlign } from '../interfaces';

type ITableColumnExtends = 'id' | 'className' | 'style' | 'tabIndex' | 'width';

export interface ITableColumnProps extends Pick<TableCellProps, ITableColumnExtends> {
  /**
   * Unique key, used for sorting
   */
  field: string;
  label: React.ReactNode;
  /**
   * Default `left`
   */
  align?: ITableAlign;
  /**
   * Control of ordered columns
   * Default `false`
   */
  sortable?: boolean;
}

export default React.memo<ITableColumnProps>(() => null);
