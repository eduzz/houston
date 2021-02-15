import * as React from 'react';

import { TableProps } from '@material-ui/core/Table';

type ITableCollapse = 'id' | 'className' | 'style' | 'tabIndex' | 'children';

export interface ITableCollapseProps extends Pick<TableProps, ITableCollapse> {
  loading?: boolean;
  onCollapse?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Collapse(props: ITableCollapseProps): null {
  return null;
}

export default React.memo(Collapse);
