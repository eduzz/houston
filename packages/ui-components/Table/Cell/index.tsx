import * as React from 'react';

import { ITableAlign } from '../interfaces';

type ITableCellExtends = 'id' | 'className' | 'style' | 'children';

export interface ITableCellProps extends Pick<React.HTMLAttributes<HTMLTableCellElement>, ITableCellExtends> {
  /**
   * Default `left`
   */
  align?: ITableAlign;
  /**
   * Default `false`
   */
  truncate?: number;
  colSpan?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Cell(props: ITableCellProps): null {
  return null;
}

export default React.memo(Cell);
