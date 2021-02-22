import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import { truncateText } from '../../../Helpers/functions';
import { ITableCellProps } from '../../Cell';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      borderBottom: 0
    }
  })
);

interface IProps extends ITableCellProps {
  list?: boolean;
}

const Cell: React.FC<IProps> = props => {
  const classes = useStyles();

  const cellProps = { ...props };
  const { children, truncate = false, list } = props;

  delete cellProps.children;
  delete cellProps.truncate;
  delete cellProps.list;

  return (
    <TableCell {...cellProps} classes={{ root: list && classes.list }}>
      {truncate && <span title={String(children)}>{truncateText(String(children), truncate)}</span>}
      {!truncate && children}
    </TableCell>
  );
};

export default React.memo(Cell);
