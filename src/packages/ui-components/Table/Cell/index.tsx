import * as React from 'react';

import { GridSize } from '@material-ui/core/Grid';
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

export interface ITableCellXs {
  margin?: number | string;
  size?: GridSize | 0;
  order?: number;
  align?: 'center' | 'right';
}

export interface ITableCellProps extends Pick<TableCellProps, ITableCellExtends> {
  /**
   * Default `false`
   */
  truncate?: number;
  /**
   * Default
   * `margin`: 0
   * `size`: 12
   */
  xs?: ITableCellXs;
}

export default React.memo<ITableCellProps>(() => null);
