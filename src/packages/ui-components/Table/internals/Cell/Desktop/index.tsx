import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import clsx from 'clsx';

import { truncateText } from '../../../../Helpers/functions';
import { ITableCellProps } from '../../../Cell';

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
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

interface IProps extends ITableCellProps {
  fixed?: boolean;
  list?: boolean;
}

const Cell = React.memo<IProps>(props => {
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

  const { children, truncate = false, list = false, fixed = false } = props;

  return (
    <TableCell
      {...cellProps}
      className={clsx(list && classes.list, fixed && classes.fixed, props?.className && props.className)}
    >
      {truncate && <span title={String(children)}>{truncateText(String(children), truncate)}</span>}
      {!truncate && children}
    </TableCell>
  );
});

export default Cell;
