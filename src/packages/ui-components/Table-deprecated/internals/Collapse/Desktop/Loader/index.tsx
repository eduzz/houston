import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(() =>
  createStyles({
    loader: {
      padding: 16
    }
  })
);

interface IProps {
  columns: number;
}

const LoaderCollapse = React.memo<IProps>(({ columns }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell align='center' colSpan={columns}>
        <div className={classes.loader}>
          <CircularProgress size='2rem' />
        </div>
      </TableCell>
    </TableRow>
  );
});

export default LoaderCollapse;
