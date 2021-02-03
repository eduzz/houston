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
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Actions(props: ITableActionsProps): null {
  return null;
}

export default React.memo(Actions);
