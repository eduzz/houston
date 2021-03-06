import * as React from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import createUseStyles from '../../../../../styles/createUseStyles';
import Typography from '../../../../../Typography';
import { useTableContext } from '../../../../context';

const useStyles = createUseStyles({
  empty: {
    padding: 16
  }
});

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
