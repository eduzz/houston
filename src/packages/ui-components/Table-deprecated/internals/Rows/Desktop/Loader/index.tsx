import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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
