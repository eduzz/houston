import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import createUseStyles from '../../../../../styles/createUseStyles';
import { useTableContext } from '../../../../context';

const useStyles = createUseStyles({
  loader: {
    padding: 16
  }
});

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
