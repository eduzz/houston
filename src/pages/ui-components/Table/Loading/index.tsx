import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableLoadingProps {
  text: React.ReactNode;
}

const useStyle = createUseStyles(theme => ({
  text: {
    padding: theme.spacing(5)
  }
}));

const TableLoading = React.memo<ITableLoadingProps>(({ text }) => {
  const classes = useStyle();

  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  return (
    <tr className='table-loader'>
      <td align='center' colSpan={1000}>
        {!isCollapseContent && (
          <>
            <LinearProgress />

            <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className={classes.text}>
              {text}
            </Typography>
          </>
        )}

        {isCollapseContent && (
          <div className={classes.text}>
            <CircularProgress size={32} />
          </div>
        )}
      </td>
    </tr>
  );
});

export default TableLoading;
