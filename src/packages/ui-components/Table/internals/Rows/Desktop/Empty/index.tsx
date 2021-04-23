import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Typography from '../../../../../Typography';
import { useTableContext } from '../../../../context';

const useStyles = makeStyles(() =>
  createStyles({
    empty: {
      padding: 16
    }
  })
);

const RowsEmpty = React.memo(() => {
  const classes = useStyles();
  const { messages, numberColumns } = useTableContext();

  return (
    <TableBody>
      <TableRow>
        <TableCell align='center' colSpan={numberColumns}>
          <div className={classes.empty}>
            <Typography size='normal' fontWeight='regular' lineHeight='normal'>
              {messages.empty}
            </Typography>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  );
});

export default RowsEmpty;
