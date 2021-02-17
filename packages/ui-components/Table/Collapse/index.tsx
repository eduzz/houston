import * as React from 'react';

import { TableProps } from '@material-ui/core/Table';

import { ITableCollapseType } from '../interfaces';

type ITableCollapse = 'id' | 'className' | 'style' | 'tabIndex' | 'children';

export interface ITableCollapseProps extends Pick<TableProps, ITableCollapse> {
  loading?: boolean;
  /**
   * Default `false`
   */
  onCollapse?: (data?: unknown) => void;
  /**
   * If `list` will not render the bottom columns and borders
   */
  type?: ITableCollapseType;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Collapse(props: ITableCollapseProps): null {
  return null;
}

export default React.memo(Collapse);
