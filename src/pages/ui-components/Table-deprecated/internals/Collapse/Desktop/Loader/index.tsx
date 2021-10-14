import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import createUseStyles from '../../../../../styles/createUseStyles';

const useStyles = createUseStyles({
  loader: { padding: 16 }
});

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
