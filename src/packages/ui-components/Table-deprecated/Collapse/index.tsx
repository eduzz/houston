import * as React from 'react';

import { TableProps } from '@mui/material/Table';

import { ITableCollapseType } from '../interfaces';

type ITableCollapse = 'id' | 'className' | 'tabIndex' | 'children';

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
  /**
   * Function called when clicking in icon action in row
   */
  onActionsClick?: (event: React.MouseEvent<HTMLElement>, data: unknown) => void;
}

export default (() => null) as React.FC<ITableCollapseProps>;
