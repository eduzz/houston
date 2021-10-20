import * as React from 'react';

import TableCell from '@mui/material/TableCell';
import clsx from 'clsx';

import { truncateText } from '../../../../Helpers/functions';
import createUseStyles from '../../../../styles/createUseStyles';
import { ITableCellProps } from '../../../Cell';

const useStyles = createUseStyles(theme => ({
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
    background: theme.colors.grey[100]
  }
}));

interface IProps extends ITableCellProps {
  fixed?: boolean;
  list?: boolean;
  hasEndAdornment?: boolean;
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

  const { children, truncate = false, list = false, fixed = false, hasEndAdornment = false } = props;

  return (
    <TableCell
      {...cellProps}
      className={clsx(
        list && classes.list,
        fixed && classes.fixed,
        hasEndAdornment && classes.hasEndAdornment,
        props?.className
      )}
    >
      {truncate && <span title={String(children)}>{truncateText(String(children), truncate)}</span>}
      {!truncate && children}
    </TableCell>
  );
});

export default Cell;
