import * as React from 'react';

import { ITableAlign } from '../interfaces';

type ITableActionsExtends = 'id' | 'className' | 'children';

export interface ITableActionsProps extends Pick<React.HTMLAttributes<HTMLDivElement>, ITableActionsExtends> {
  /**
   * Default `Ações`
   */
  label?: React.ReactNode | false;
  /**
   * Default `left`
   */
  align?: ITableAlign;
  /**
   * If the value is true, the action column will be fixed in the table
   * Default `false`
   */
  fixed?: boolean;
}

export default React.memo<ITableActionsProps>(() => null);
