import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCellMUI, { TableCellProps as ITableCellPropsMUI } from '@material-ui/core/TableCell';

import clsx from 'clsx';

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
  fixed?: boolean;
  list?: boolean;
  hasEndAdornment?: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      borderBottom: 0
    },

    hasEndAdornment: {
      borderBottom: 0
    },

    fixed: {
      position: 'sticky',
      top: 0,
      right: 0,
      left: 0,
      background: theme.palette.grey[100]
    }
  })
);

const TableCell = React.memo<ITableCellProps>(props => {
  const classes = useStyles();

  const cellProps = React.useMemo(
    () => ({
      id: props?.id,
      padding: props?.padding,
      colSpan: props?.colSpan,
      align: props?.align,
      onClick: props?.onClick,
      onDoubleClick: props?.onDoubleClick
    }),
    [props?.id, props?.padding, props?.colSpan, props?.align, props?.onClick, props?.onDoubleClick]
  );

  const { children, list = false, fixed = false, hasEndAdornment = false } = props;

  return (
    <TableCellMUI
      {...cellProps}
      className={clsx(
        list && classes.list,
        fixed && classes.fixed,
        hasEndAdornment && classes.hasEndAdornment,
        props?.className
      )}
    >
      {children}
    </TableCellMUI>
  );
});

export default TableCell;
