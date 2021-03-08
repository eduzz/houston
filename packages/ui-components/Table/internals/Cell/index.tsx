import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import clsx from 'clsx';

import { truncateText } from '../../../Helpers/functions';
import { ITableCellProps } from '../../Cell';

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

const Cell = (props: IProps) => {
  const classes = useStyles();

  const cellProps = {
    id: props?.id,
    className: props?.className,
    padding: props?.padding,
    colSpan: props?.colSpan,
    align: props?.align,
    onClick: props?.onClick,
    onDoubleClick: props?.onDoubleClick
  };

  const { children, truncate = false, list, fixed } = props;

  return (
    <TableCell {...cellProps} className={clsx(list && classes.list, fixed && classes.fixed)}>
      {truncate && <span title={String(children)}>{truncateText(String(children), truncate)}</span>}
      {!truncate && children}
    </TableCell>
  );
};

export default React.memo(Cell);
