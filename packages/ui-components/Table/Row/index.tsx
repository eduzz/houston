import * as React from 'react';

type ITableRowExtends = 'id' | 'className' | 'style' | 'tabIndex' | 'children';

export interface ITableRowProps extends Pick<React.HTMLAttributes<HTMLTableCellElement>, ITableRowExtends> {
  /**
   * Row values
   */
  data?: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Row(props: ITableRowProps): null {
  return null;
}

export default React.memo(Row);
