import * as React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableLoadingProps {}

const useStyle = createUseStyles(theme => ({
  text: {
    padding: theme.spacing(5)
  }
}));

const TableLoading = React.memo<ITableLoadingProps>(() => {
  const columnsLen = useContextSelector(TableContext, context => context.columns.length);
  const loading = useContextSelector(TableContext, context => context.loading);
  const loadingText = useContextSelector(TableContext, context => context.loadingText);

  const classes = useStyle();

  if (!loading) return null;

  return (
    <TableRow className='table-loader'>
      <TableCell align='center' colSpan={columnsLen}>
        <LinearProgress />
        <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className={classes.text}>
          {loadingText}
        </Typography>
      </TableCell>
    </TableRow>
  );
});

export default TableLoading;
