import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { useTableContext } from '../../../../context';

const useStyles = makeStyles(() =>
  createStyles({
    loader: {
      padding: 16
    }
  })
);

const RowLoader = React.memo(() => {
  const classes = useStyles();
  const { numberColumns } = useTableContext();

  return (
    <TableRow>
      <TableCell align='center' colSpan={numberColumns}>
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      </TableCell>
    </TableRow>
  );
});

export default RowLoader;
