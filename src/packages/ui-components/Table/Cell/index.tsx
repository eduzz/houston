import * as React from 'react';

import TableCellMUI, { TableCellProps as ITableCellPropsMUI } from '@material-ui/core/TableCell';

import Typography from '../../Typography';

type ITableCellExtends =
  | 'id'
  | 'className'
  | 'children'
  | 'padding'
  | 'colSpan'
  | 'align'
  | 'onClick'
  | 'onDoubleClick';

export interface ITableCellProps extends Pick<ITableCellPropsMUI, ITableCellExtends> {}

const TableCell = React.memo<ITableCellProps>(({ children, ...props }) => {
  return (
    <TableCellMUI {...props}>
      {typeof children === 'string' ? <Typography>{children}</Typography> : children}
    </TableCellMUI>
  );
});

export default TableCell;
