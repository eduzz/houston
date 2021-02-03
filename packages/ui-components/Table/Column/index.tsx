import * as React from 'react';

import { ITableAlign } from '../interfaces';

type ITableColumnExtends = 'id' | 'className' | 'style' | 'tabIndex';

export interface ITableColumnProps extends Pick<React.HTMLAttributes<HTMLTableCellElement>, ITableColumnExtends> {
  /**
   * Unique key, used for sorting
   */
  field: string;
  label: React.ReactNode;
  width?: number;
  /**
   * Default `left`
   */
  align?: ITableAlign;
  sortable?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column(props: ITableColumnProps): null {
  return null;
}

export default React.memo(Column);
