import * as React from 'react';

import { GridSize } from '@material-ui/core/Grid';
import TableCellMUI, { TableCellProps as ITableCellPropsMUI } from '@material-ui/core/TableCell';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import Typography from '../../Typography';
import TableContext from '../context';

let cellKeyIncremeter = 0;

type ITableCellExtends =
  | 'id'
  | 'className'
  | 'children'
  | 'padding'
  | 'colSpan'
  | 'align'
  | 'onClick'
  | 'onDoubleClick';

export interface ITableCellProps extends Pick<ITableCellPropsMUI, ITableCellExtends> {
  mobileSize?: GridSize | true | false;
}

const TableCell = React.memo<ITableCellProps>(({ children, className, mobileSize, ...props }) => {
  const [cellKey] = React.useState(() => `cell-${++cellKeyIncremeter}`);
  const cellRef = React.useRef<HTMLTableCellElement>();

  const label = useContextSelector(TableContext, context => context.rowMapLabel[cellKey]);

  React.useEffect(() => {
    cellRef.current.setAttribute('cell-key', cellKey);
  }, [cellKey]);

  return (
    <TableCellMUI {...props} className={clsx(className, `cell-size-${mobileSize ?? 'auto'}`)} ref={cellRef}>
      <Typography size='x-small' fontWeight='regular' lineHeight='compact' lighter>
        {label}
      </Typography>
      {typeof children === 'string' ? <Typography>{children}</Typography> : children}
    </TableCellMUI>
  );
});

export default TableCell;
